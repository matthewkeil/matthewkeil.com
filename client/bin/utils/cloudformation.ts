import * as AWS from "aws-sdk";
import { emptyBucket } from "./s3";

/**
 *
 * setup for AWS services
 *
 */
const AWS_SERVICE_CONFIG = {
    region: process.env.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

const CF = new AWS.CloudFormation(AWS_SERVICE_CONFIG);

export const enum Status {
    CREATE_COMPLETE = "CREATE_COMPLETE",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    CREATE_FAILED = "CREATE_FAILED",
    DELETE_COMPLETE = "DELETE_COMPLETE",
    DELETE_FAILED = "DELETE_FAILED",
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
    REVIEW_IN_PROGRESS = "REVIEW_IN_PROGRESS",
    ROLLBACK_COMPLETE = "ROLLBACK_COMPLETE", // delete must follow
    ROLLBACK_FAILED = "ROLLBACK_FAILED",
    ROLLBACK_IN_PROGRESS = "ROLLBACK_IN_PROGRESS",
    UPDATE_COMPLETE = "UPDATE_COMPLETE",
    UPDATE_COMPLETE_CLEANUP_IN_PROGRESS = "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS",
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
    UPDATE_ROLLBACK_COMPLETE = "UPDATE_ROLLBACK_COMPLETE",
    UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS",
    UPDATE_ROLLBACK_FAILED = "UPDATE_ROLLBACK_FAILED", // delete or continue rollback must follow
    UPDATE_ROLLBACK_IN_PROGRESS = "UPDATE_ROLLBACK_IN_PROGRESS"
}

export const getStackStatus = async (name: string): Promise<string | void> => {
    try {
        const response = await CF.describeStacks({ StackName: name }).promise();

        if (response.Stacks) {
            return response.Stacks[0].StackStatus;
        }
    } catch (err) {
        return undefined;
    }

    throw new Error("unknown error occurred trying to get stack status");
};

export const createStack = async (
    params: AWS.CloudFormation.CreateStackInput
) => {
    console.log(`creating stack ${params.StackName} through cloud formation`);
    const response = await CF.createStack(params).promise();
    console.log(response);

    const results = await CF.waitFor("stackCreateComplete", {
        StackName: response.StackId
    }).promise();
    console.log(results);
};

export const updateStack = async (
    params: AWS.CloudFormation.UpdateStackInput
) => {
    console.log(`updating stack ${params.StackName} through cloud formation`);
    const response: any = await CF.updateStack(params).promise();
    console.log(response);

    const results = await CF.waitFor("stackUpdateComplete", {
        StackName: response.StackId
    }).promise();
    console.log(results);
};

export const emptyStackBuckets = async ({
    StackName
}: AWS.CloudFormation.DeleteStackInput) => {
    console.log(`looking for s3 buckets to empty in stack ${StackName}`);
    const response: any = await CF.listStackResources({ StackName }).promise();

    const bucketPhysicalResourceIds: string[] = response.StackResourceSummaries.filter(
        (resource: any) => resource.ResourceType === "AWS::S3::Bucket"
    ).map((resource: any) => resource.PhysicalResourceId);
    console.log(
        `stack has buckets named ${bucketPhysicalResourceIds.join(", ")}`
    );

    await Promise.all(bucketPhysicalResourceIds.map(Bucket => {
        return emptyBucket({ Bucket })
    }));
};

export const deleteStack = async ({
    StackName
}: AWS.CloudFormation.DeleteStackInput) => {
    console.log(`deleting stack ${StackName} through cloud formation`);
    try {
        await emptyStackBuckets({ StackName });
    } catch (err) {
        console.error(err.message)
    }

    const response = await CF.deleteStack({ StackName }).promise();
    console.log(response);

    const results = await CF.waitFor("stackDeleteComplete", {
        StackName
    }).promise();
    console.log(results);
};

export const handleStackCreateAndUpdate = async (params: AWS.CloudFormation.CreateStackInput | AWS.CloudFormation.UpdateStackInput) => {
    const StackName = params.StackName;
    /**
     *
     * Cloudformation does not allow some stack states to be updated and thus
     * the stack must be deleted and recreated. First checks to see if stack exists,
     * if not creates it. If stack exists check status to see if can be updated, if
     * not, delete and recreate. If no issues go ahead and upadte the stack.
     *
     */
    const status = await getStackStatus(StackName);

    switch (status) {
        // no status means stack doesn't exist
        case undefined:
            console.log(`${StackName} doest not exist, creating it`);
            return await createStack(params);
        // cases where delete must happen first
        case Status.ROLLBACK_COMPLETE:
        case Status.ROLLBACK_FAILED:
        case Status.UPDATE_ROLLBACK_FAILED:
        case Status.CREATE_FAILED:
            console.log(`${StackName} is in a failed state. deleting first`);
            await deleteStack({ StackName });
            console.log("delete complete. rebuilding stack");
            return await createStack(params);
        // cases where ready for update
        default:
            return await updateStack(params);
    }
};

interface CreateBucketStackConfig {
    repo: string
    branch: string
}

export const createBucketStack = async ({ repo, branch }: CreateBucketStackConfig) => {
    const StackName = `${repo}-${branch}`;
    console.log(`handling bucket and dns routing stack named ${StackName}`);
    const TemplateBody = require("../../aws/template").default({ repo, branch });

    await handleStackCreateAndUpdate({
        StackName,
        TemplateBody
    })
};