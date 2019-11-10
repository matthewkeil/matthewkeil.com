import AWS from 'aws-sdk';
import { CONFIG } from '../../../CONFIG';

const CF = new AWS.CloudFormation({
    region: CONFIG.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const deleteStack = async ({ StackName }: AWS.CloudFormation.DeleteStackInput) => {
    console.log(`deleting stack ${StackName} through cloud formation`);

    const response = await CF.deleteStack({ StackName }).promise();

    console.log(response);

    const results = await CF.waitFor("stackDeleteComplete", {
        StackName
    }).promise();

    console.log(results);
};