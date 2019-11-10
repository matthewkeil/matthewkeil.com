import AWS from 'aws-sdk';
import { CONFIG } from '../../../CONFIG';

const CF = new AWS.CloudFormation({
    region: CONFIG.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const updateStack = async (params: AWS.CloudFormation.UpdateStackInput) => {
    console.log(`updating stack ${params.StackName} through cloud formation`);

    const response: any = await CF.updateStack(params).promise();

    console.log(response);

    const results = await CF.waitFor("stackUpdateComplete", {
        StackName: response.StackId
    }).promise();

    console.log(results);
};