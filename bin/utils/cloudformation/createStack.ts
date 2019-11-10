import AWS from 'aws-sdk';
import { CONFIG } from '../../../CONFIG';

const CF = new AWS.CloudFormation({
    region: CONFIG.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const createStack = async (params: AWS.CloudFormation.CreateStackInput) => {
    console.log(`creating stack ${params.StackName} through cloud formation`);

    const response = await CF.createStack(params).promise();

    console.log(response);

    const results = await CF.waitFor("stackCreateComplete", {
        StackName: response.StackId
    }).promise();

    console.log(results);
};