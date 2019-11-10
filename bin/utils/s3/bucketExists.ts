import AWS from 'aws-sdk';
import { CONFIG } from '../../../CONFIG';

const S3 = new AWS.S3({
    region: CONFIG.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const bucketExists = async ({ Bucket }: { Bucket: string }) => {
    const list = await S3.listBuckets().promise();

    if (list.Buckets) {
        let bucket = list.Buckets.find(bucket => {
            if (bucket.Name) {
                return bucket.Name.includes(Bucket);
            }
        });

        if (bucket) {
            return true;
        }
    }

    return false;
};