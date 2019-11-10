import { config } from '../../../config';

const { CF } = config;

export const deleteStack = async ({ StackName }: AWS.CloudFormation.DeleteStackInput) => {
    console.log(`deleting stack ${StackName} through cloud formation`);

    const response = await CF.deleteStack({ StackName }).promise();

    console.log(response);

    const results = await CF.waitFor("stackDeleteComplete", {
        StackName
    }).promise();

    console.log(results);
};