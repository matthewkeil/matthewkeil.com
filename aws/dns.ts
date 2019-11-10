import { default as CF, Fn } from 'cloudform';
import { HostedZone } from './route53/HostedZone';
import { Certificate } from './certificateManager/Certificate'


export default CF({
  Description: 'passninja-core-master-dns',
  Parameters: {
    RootDomain: {
      Description: 'Root domain at which the system is hosted.',
      Type: 'String',
      Default: process.env.ROOT_DOMAIN
    }
  },
  Resources: {
    HostedZone,
    Certificate
  },
  Outputs: {
    RootDomain: {
      Description: 'Root domain at which the system is hosted.',
      Value: Fn.Ref('RootDomain'),
      Export: { Name: 'RootDomain' }
    },
    HostedZoneId: {
      Description: `HostedZoneId for ${process.env.ROOT_DOMAIN}`,
      Value: Fn.Ref('HostedZone'),
      Export: { Name: 'HostedZoneId' }
    },
    HostedZoneNameServers: {
      Description: `Domain Name Servers for ${process.env.ROOT_DOMAIN}`,
      Value: Fn.Join(', ', Fn.GetAtt('HostedZone', 'NameServers')),
      Export: { Name: 'HostedZoneNameServers' }
    },
    Certificate: {
      Description: `SSL Certificate covering *.${process.env.ROOT_DOMAIN}`,
      Value: Fn.Ref('Certificate'),
      Export: { Name: 'Certificate' }
    }
  }
});
