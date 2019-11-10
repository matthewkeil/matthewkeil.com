import AWS from 'aws-sdk';
import { CONFIG } from '../../../CONFIG';

const CF = new AWS.CloudFormation({
    region: CONFIG.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const getStackStatus = async ({ StackName }: { StackName: string }): Promise<string | void> => {
    try {
        const response = await CF.describeStacks({ StackName }).promise();

        if (response.Stacks) {
            return response.Stacks[0].StackStatus;
        }
    } catch (err) {
        return undefined;
    }

    throw new Error("unknown error occurred trying to get stack status");
};