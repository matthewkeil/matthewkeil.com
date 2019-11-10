import { default as CF, Fn } from 'cloudform';

import { UserPool } from './iam/UserPool';
import { UserPoolClient } from './iam/UserPoolClient';
import { IdentityPool } from './iam/IdentityPool';

// throw new Error(`
// pass-ninjas-iam-core should not be updated using CloudFormation.
// exports used for other passninja stacks.
// These templates are for reference only!!`);

export default CF({
  Description: 'passninja-core-master-pools',
  Resources: {
    UserPool,
    UserPoolClient,
    IdentityPool
  },
  Outputs: {
    UserPoolId: {
      Description: 'PassNinja User Pool Id',
      Value: Fn.Ref('UserPool'),
      Export: { Name: 'UserPoolId' }
    },
    UserPoolArn: {
      Description: 'PassNinja User Pool Arn',
      Value: Fn.GetAtt('UserPool', 'Arn'),
      Export: { Name: 'UserPoolArn' }
    },
    UserPoolClientId: {
      Description: 'PassNinja User Pool Client Id',
      Value: Fn.Ref('UserPoolClient'),
      Export: { Name: 'UserPoolClientId' }
    },
    IdentityPoolId: {
      Description: 'PassNinja Identity Pool Id',
      Value: Fn.Ref('IdentityPool'),
      Export: { Name: 'IdentityPoolId' }
    },
    Federation: {
      Description: 'PassNinja SSO Federation',
      Value: Fn.GetAtt('UserPool', 'ProviderName'),
      Export: { Name: 'Federation' }
    },
  }
});
