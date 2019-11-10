import { S3, Fn } from "cloudform";

export const BucketPolicy = new S3.BucketPolicy({
    Bucket: Fn.Ref("Bucket"),
    PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
            {
                Sid: "Allow CloudFront read access",
                Effect: "Allow",
                Action: "s3:GetObject",
                Resource: Fn.Join("", [Fn.GetAtt("Bucket", "Arn"), "/*"]),
                Principal: {
                    CanonicalUser: Fn.GetAtt('OriginAccessIdentity', 'S3CanonicalUserId')
                }
            }
        ]
    }
}).dependsOn("OriginAccessIdentity");
