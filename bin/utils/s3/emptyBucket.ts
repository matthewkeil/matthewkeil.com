import { config } from '../../../config';

const { S3 } = config;

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
                Bucket,
                Key
            }).promise();
        });
    }
};