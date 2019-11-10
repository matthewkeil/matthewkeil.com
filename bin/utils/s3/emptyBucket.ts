import AWS from 'aws-sdk';
import { CONFIG } from '../../../CONFIG';

const S3 = new AWS.S3({
    region: CONFIG.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const emptyBucket = async ({ Bucket }: { Bucket: string }) => {
    const { Contents } = await S3.listObjects({
        Bucket
        // Prefix: 'lambdas'
    }).promise();

    if (Contents && !!Contents.length) {
        console.log(`attempting to empty ${Bucket}`);
        Contents.forEach(async ({ Key }) => {
            // @ts-ignore error in ts definition for .promise()
            await S3.deleteObject({
                // @ts-ignore error in ts definition for .promise()
                Bucket,
                // @ts-ignore error in ts definition for .promise()
                Key
                // @ts-ignore error in ts definition for .promise()
            }).promise();
        });
    }
};