import { IAM, Fn, Refs } from 'cloudform';

export const ApiGatewayPolicy = new IAM.Policy({
    Roles: [Fn.Ref('ApiGatewayRole')],
    PolicyName: 'api-gateway-policy',
    PolicyDocument: {
        Version: '2012-10-17',
        Statement: [{
            Effect: 'Allow',
            Action: 'logs:*',
            Resource: '*'
        }]
    }
}).dependsOn('ApiGatewayRole')