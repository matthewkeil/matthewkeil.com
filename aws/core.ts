import { Fn } from 'cloudform';
import { CONFIG } from "../CONFIG";
import { camelCaseDomainName } from '../bin';

import { HostedZone } from './route53/HostedZone';
import { ApiGatewayAccount } from "./apiGateway/ApiGatewayAccount";
import { ApiGatewayPolicy } from "./apiGateway/ApiGatewayPolicy";
import { ApiGatewayRole } from "./apiGateway/ApiGatewayRole";

export const coreTemplate = {
  Description: `${camelCaseDomainName(CONFIG.ROOT_DOMAIN)}-core`,
  Parameters: {
    RootDomain: {
      Description: 'Root domain at which the system is hosted.',
      Type: 'String',
      Default: CONFIG.ROOT_DOMAIN
    }
  },
  Resources: {
    ApiGatewayAccount,
    ApiGatewayPolicy,
    ApiGatewayRole,
    HostedZone
  },
  Outputs: {
    RootDomain: {
      Description: 'Root domain at which the system is hosted.',
      Value: Fn.Ref('RootDomain'),
      Export: { Name: 'RootDomain' }
    },
    HostedZoneId: {
      Description: `HostedZoneId for ${CONFIG.ROOT_DOMAIN}`,
      Value: Fn.Ref('HostedZone'),
      Export: { Name: 'HostedZoneId' }
    },
    HostedZoneNameServers: {
      Description: `Domain Name Servers for ${CONFIG.ROOT_DOMAIN}`,
      Value: Fn.Join(', ', Fn.GetAtt('HostedZone', 'NameServers')),
      Export: { Name: 'HostedZoneNameServers' }
    }
  }
};
