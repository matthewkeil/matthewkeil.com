if (require.main === module) {
    require("dotenv").config();
}

import * as util from 'util';
import * as fs from 'fs';
import * as PATH from 'path';
import * as AWS from 'aws-sdk';
import { lookup } from 'mime-types'
import { FROM_CLIENT_ROOT, getDomaintName } from './helpers';
import { createBucketStack } from './cloudformation';

const STAT = util.promisify(fs.stat);

/**
 * 
 * S3 helpers
 * 
 */
const AWS_SERVICE_CONFIG: AWS.S3.ClientConfiguration = {
    region: process.env.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    httpOptions: {
        timeout: 1200000
    }
};
const S3 = new AWS.S3(AWS_SERVICE_CONFIG);

export const emptyBucket = async ({ Bucket }: { Bucket: string }) => {
    console.log(`attempting to empty ${Bucket}`);
    const { Contents } = await S3.listObjects({
        Bucket
    }).promise();
    if (Contents && !!Contents.length) {
        await Promise.all(Contents.map(({ Key }) => {
            // console.log(`deleting ${Bucket}/${Key}`)
            S3.deleteObject({
                // @ts-ignore error in ts definition for .promise()
                Bucket,
                Key
            }).promise();
        }));
        console.log(`Bucket ${Bucket} is empty`);
    }
}

export const deleteBucket = async ({ Bucket }: { Bucket: string }) => {
    console.log(`deleting bucket named ${Bucket}`);
    await emptyBucket({ Bucket });
    // sometimes it takes a second attempt to get bucket deleted
    try {
        await S3.deleteBucket({ Bucket }).promise()
    } catch (err) {
        await S3.deleteBucket({ Bucket }).promise()
    }
    console.log(`finished deleting bucket ${Bucket}`);
};

interface UploadFileProps {
    Bucket: string
    Key: string
    path: string
}

const uploadFile = async ({ Bucket, Key, path }: UploadFileProps) => {
    const contentType = lookup(Key);
    const props: AWS.S3.PutObjectRequest = {
        Bucket,
        Key,
        ACL: 'public-read',
        ContentEncoding: 'utf-8',
        ContentType: contentType ? contentType : 'application/octet-stream',
        Body: fs.createReadStream(path, { autoClose: true })
    };
    const response = await S3.upload(props).promise();

    return response;
};

const walkDirectory = async ({ path, keyBase, Bucket }: { path: string, keyBase: string, Bucket: string }) => new Promise((resolve, reject) => {
    console.log('attempting to upload ' + path);
    fs.readdir(path, async (err, files) => {
        if (err) throw reject(err);
        await Promise.all(files.map(async object => {
            const current = PATH.join(path, object);
            const stat = await STAT(current)
            if (stat.isDirectory()) {
                return walkDirectory({ Bucket, path: current, keyBase: `${keyBase}${object}/` })
            }
            const Key = keyBase + object;

            return uploadFile({ Bucket, Key: Key.slice(1), path: current });
        }))
        console.log('finished uploading ' + keyBase);
        resolve();
    });
});

export const uploadDist = async ({ Bucket }: { Bucket: string }) => {
    const DIST = FROM_CLIENT_ROOT('dist');
    const keyBase = '/';

    await walkDirectory({ Bucket, path: DIST, keyBase });
    console.log(`finished uploading dist / to ${Bucket}`);
};

interface BucketConfig {
    repo: string
    branch: string
    empty?: boolean
}

export const bucketExists = async (Bucket: string) => {
    const list = await S3.listBuckets().promise();

    if (list.Buckets) {
        return !!list.Buckets.find(_bucket => {
            if (_bucket.Name) {
                return _bucket.Name === Bucket;
            }
        });
    }

    return false;
}

export const getBucket = async ({ repo, branch, empty = false }: BucketConfig) => {
    const Bucket = getDomaintName({
        branch,
        domain: process.env.DOMAIN_NAME
    });

    if (await bucketExists(Bucket)) {
        console.log(`found existing artifacts bucket`);
        if (empty) {
            await emptyBucket({ Bucket })
        }
    } else {
        await createBucketStack({ repo, branch })
    }

    return Bucket;
};
