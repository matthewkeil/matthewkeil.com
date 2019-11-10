import AWS from "aws-sdk";
import { StackStatus } from "./StackStatus";
import { getStackStatus } from "./getStatus";
import { createStack } from "./createStack";
import { updateStack } from "./updateStack";
import { deleteStack } from "./deleteStack";

export const handleStackCreateAndUpdate = async (params: AWS.CloudFormation.CreateStackInput | AWS.CloudFormation.UpdateStackInput) => {
    /**
     *
     * Cloudformation does not allow some stack states to be updated and thus
     * the stack must be deleted and recreated. First checks to see if stack exists,
     * if not creates it. If stack exists check status to see if can be updated, if
     * not, delete and recreate. If no issues go ahead and upadte the stack.
     *
     */
    const status = await getStackStatus(params);

    switch (status) {
        case undefined:
            // no status means stack doesn't exist
            console.log(`${params.StackName} doest not exist, creating it`);
            return await createStack(params);
        case StackStatus.ROLLBACK_COMPLETE:
        case StackStatus.ROLLBACK_FAILED:
        case StackStatus.UPDATE_ROLLBACK_FAILED:
        case StackStatus.CREATE_FAILED:
            // cases where delete must happen first
            console.log(`${params.StackName} is in a failed state. deleting first`);
            await deleteStack(params);

            console.log("delete complete. rebuilding stack");
            return await createStack(params);
        default:
            // cases where ready for update
            return await updateStack(params);
    }
};
