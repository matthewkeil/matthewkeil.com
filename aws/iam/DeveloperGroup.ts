import { IAM, Fn } from 'cloudform';

export const DeveloperGroup = new IAM.Group({
  GroupName: 'passninja-developer',
  ManagedPolicyArns: [Fn.Ref('DeveloperPolicy')]
});
