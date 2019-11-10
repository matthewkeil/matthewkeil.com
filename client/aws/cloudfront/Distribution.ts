import { CloudFront, Fn } from "cloudform";

export const Distribution = new CloudFront.Distribution({
    DistributionConfig: {
        Aliases: [Fn.Join(".", [Fn.Ref("SubDomain"), Fn.ImportValue("RootDomain")])],
        Comment: Fn.Join('', [
            'cloudfront distribution for ',
            Fn.Ref("SubDomain"),
            ".",
            Fn.ImportValue("RootDomain")
        ]),
        CustomErrorResponses: [{
            ErrorCachingMinTTL: 60,
            ErrorCode: 404,
            ResponseCode: 404,
            ResponsePagePath: '/index.html'
        }],
        DefaultCacheBehavior: {
            AllowedMethods: ["GET", "HEAD"],
            TargetOriginId: 's3Origin',
            Compress: true,
            DefaultTTL: 1,
            MinTTL: 1,
            ViewerProtocolPolicy: 'redirect-to-https',
            ForwardedValues: {
                QueryString: false,
                Cookies: {
                    Forward: 'none'
                }
            }
        },
        DefaultRootObject: 'index.html',
        Enabled: true,
        HttpVersion: 'http2',
        // Logging: {
        //     IncludeCookies: false,
        //     Bucket: '', // TODO:
        //     Prefix: '' // TODO:
        // },
        Origins: [{
            Id: 's3Origin',
            DomainName: Fn.GetAtt('Bucket', 'DomainName'),
            S3OriginConfig: {
                OriginAccessIdentity: Fn.Join('/', ['origin-access-identity/cloudfront', Fn.Ref('OriginAccessIdentity')])
            }
        }],
        PriceClass: 'PriceClass_100', // PriceClass_100 | PriceClass_200 | PriceClass_All
        ViewerCertificate: {
            AcmCertificateArn: Fn.ImportValue("Certificate"),
            MinimumProtocolVersion: 'TLSv1.1_2016',
            SslSupportMethod: 'sni-only'
        }
    }
}).dependsOn(["Bucket", "OriginAccessIdentity"]);