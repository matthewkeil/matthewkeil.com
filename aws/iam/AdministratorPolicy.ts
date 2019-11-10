import { IAM } from 'cloudform';

export const AdministratorPolicy = new IAM.ManagedPolicy({
  ManagedPolicyName: 'passninja-administrator-policy',
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
