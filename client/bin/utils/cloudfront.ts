if (require.main === module) {
    require("dotenv").config();
}

import * as AWS from 'aws-sdk';

const AWS_SERVICE_CONFIG = {
    region: process.env.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};
const cloudfront = new AWS.CloudFront(AWS_SERVICE_CONFIG);
const getDistributionForBucket = async ({ Bucket }: { Bucket: string }) => {
    const { DistributionList } = await cloudfront.listDistributions().promise();
    if (!DistributionList.Items) {
        throw new Error('no distributions found');
    }

    const distribution = DistributionList.Items.find(dist => {
        if (dist.Origins.Quantity > 0) {
            const originIndex = dist.Origins.Items.find(origin => {
                return origin.DomainName === `${Bucket}.s3.amazonaws.com`
            });
            if (originIndex) {
                return true
            }
        }
        return false
    })
    if (!distribution) {
        throw new Error(`couldn't find a distribution associated with bucket ${Bucket}`);
    }
    return distribution.Id;
}

export const createCacheInvalidation = async ({ DistributionId, Bucket }: { Bucket?: string, DistributionId?: string }) => {
    const invalidate = (id: string) => cloudfront.createInvalidation({
        DistributionId: id,
        InvalidationBatch: {
            CallerReference: `${Date.now()}`,
            Paths: {
                Quantity: 1,
                Items: ['/*']
            }
        }
    }).promise()

    const id = DistributionId
        ? DistributionId
        : await getDistributionForBucket({ Bucket });
    if (!id) {
        throw new Error('must provide wither Bucekt with an assoicated distribution or DistributionID to create an invalidation');
    }
    console.log(`attempting to invalidate DistributionId: ${id}`);
    return await invalidate(id)
};
