import { IAM, Fn } from 'cloudform';

export const AdministratorGroup = new IAM.Group({
  GroupName: 'passninja-administrator',
  ManagedPolicyArns: [Fn.Ref('AdministratorPolicy')]
});
