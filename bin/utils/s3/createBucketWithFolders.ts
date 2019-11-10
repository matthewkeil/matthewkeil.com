import AWS from 'aws-sdk';
import { CONFIG } from '../../../CONFIG';

const S3 = new AWS.S3({
    region: CONFIG.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const createBucketWithFolders = async ({ Bucket, folders }: { Bucket: string, folders?: string[] }) => {
    await S3.createBucket({
        Bucket
    }).promise();

    if (Array.isArray(folders)) {
        for (const folder of folders) {
            await S3.putObject({
                Bucket,
                Key: `${folder}/`
            }).promise();
        }
    }

    return Bucket;
};
