import AWS from 'aws-sdk';

const REGION = 'us-east-1';

const CF = new AWS.CloudFormation({
    region: REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const S3 = new AWS.S3({
    region: REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const config = {
    ROOT_DOMAIN: 'matthewkeil.com',
    OWNER: 'matthewkeil',
    REPO: 'matthewkeil.com',
    REGION,
    CF,
    S3
}