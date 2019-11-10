import { IAM } from 'cloudform';

export const DeveloperPolicy = new IAM.ManagedPolicy({
  ManagedPolicyName: 'passninja-developer-policy',
  PolicyDocument: {
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Action: '*',
        Resource: '*'
      }
    ]
  }
});
