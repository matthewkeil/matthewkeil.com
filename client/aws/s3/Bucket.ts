import { Fn, S3 } from "cloudform";

export const Bucket = new S3.Bucket({
    BucketName: Fn.Join(".", [Fn.Ref("SubDomain"), Fn.ImportValue("RootDomain")]),
    AccessControl: 'PublicRead',
    WebsiteConfiguration: {
        ErrorDocument: 'index.html',
        IndexDocument: 'index.html'
    },
    CorsConfiguration: {
        CorsRules: [{
            AllowedHeaders: ['*'],
            AllowedMethods: ["GET", "HEAD"],
            AllowedOrigins: ['*']
        }]
    }
});
