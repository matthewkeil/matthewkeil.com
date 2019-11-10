import { Route53, Fn } from "cloudform";

export const RecordSet = new Route53.RecordSet({
    Name: Fn.Join(".", [Fn.Ref("SubDomain"), Fn.ImportValue("RootDomain")]),
    Type: "A",
    HostedZoneId: Fn.ImportValue("HostedZoneId"),
    AliasTarget: {
        DNSName: Fn.GetAtt("Distribution", "DomainName"),
        HostedZoneId: 'Z2FDTNDATAQYW2'
    }
}).dependsOn('Distribution');
