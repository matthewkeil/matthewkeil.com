import { default as CF } from 'cloudform';

import { AdministratorGroup } from './iam/AdministratorGroup';
import { AdministratorPolicy } from './iam/AdministratorPolicy';
import { DeveloperGroup } from './iam/DeveloperGroup';
import { DeveloperPolicy } from './iam/DeveloperPolicy';
import { CustomerRole } from './iam/CustomerRole';
import { CustomerPolicy } from './iam/CustomerPolicy';
import { CustomerIotPolicy } from './iam/CustomerIotPolicy';
import { IdentityPoolRoleAttachment } from './iam/IdentityPoolRoleAttachment';
import { UnauthenticatedUserRole } from './iam/UnauthenticatedUserRole';
import { UnauthenticatedUserPolicy } from './iam/UnauthenticatedUserPolicy';
import { ApiGatewayRole } from './apiGateway/ApiGatewayRole';
import { ApiGatewayPolicy } from './apiGateway/ApiGatewayPolicy';
import { ApiGatewayAccount } from './apiGateway/ApiGatewayAccount'



export default CF({
  Description: 'passninja-core-master-iam',
  Resources: {
    AdministratorGroup,
    AdministratorPolicy,
    CustomerIotPolicy,
    CustomerPolicy,
    CustomerRole,
    DeveloperGroup,
    DeveloperPolicy,
    IdentityPoolRoleAttachment,
    UnauthenticatedUserPolicy,
    UnauthenticatedUserRole,
    ApiGatewayRole,
    ApiGatewayPolicy,
    ApiGatewayAccount
  }
});
