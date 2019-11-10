import { default as CF, Fn } from "cloudform";
import { Bucket } from './s3/Bucket';
import { BucketPolicy } from './s3/BucketPolicy';
import { OriginAccessIdentity } from './cloudfront/OriginAccessIdentity'
import { Distribution } from './cloudfront/Distribution';
import { RecordSet } from './route53/RecordSet';

export default ({ repo, branch }: { repo: string, branch: string }) => {
    const template = {
        AWSTemplateFormatVersion: "2010-09-09",
        Description: `${repo}-${branch}`,
        Parameters: {
            SubDomain: {
                Description: "Sub-domain prefix to add to dns ${SubDomain}.${RootDomain}",
                Type: "String",
                Default: branch === 'master' ? 'www' : branch
            }
        },
        Resources: {
            OriginAccessIdentity,
            Distribution,
            RecordSet,
            BucketPolicy,
            Bucket
        }
    };

    if (branch === 'master') {
        (template.Resources.Distribution.Properties.DistributionConfig.Aliases as any).push(Fn.ImportValue("RootDomain"));
        (template.Resources as any).RootRecordSet = Object.assign(
            {},
            RecordSet,
            { Properties: { ...(RecordSet.Properties), Name: Fn.ImportValue("RootDomain") } }
        );
    }

    return CF(template);
}