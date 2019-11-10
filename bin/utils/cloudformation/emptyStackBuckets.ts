import AWS from 'aws-sdk';
import { emptyBucket } from "../s3/emptyBucket";
import { CONFIG } from '../../../CONFIG';

const CF = new AWS.CloudFormation({
    region: CONFIG.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const emptyStackBuckets = async ({ StackName }: AWS.CloudFormation.DeleteStackInput) => {
    console.log(`looking for artifacts and cache buckets for ${StackName}`);

    const response: any = await CF.listStackResources({ StackName }).promise();

    const bucketPhysicalResourceIds: string[] = response.StackResourceSummaries.filter(
        (resource: any) => resource.ResourceType === "AWS::S3::Bucket"
    ).map((resource: any) => resource.PhysicalResourceId);

    console.log(
        `stack has buckets named ${bucketPhysicalResourceIds.join(", ")}`
    );

    bucketPhysicalResourceIds.forEach(
        async Bucket => await emptyBucket({ Bucket })
    );
};