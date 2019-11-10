if (require.main === module) {
    require("dotenv").config();
}

import * as fs from 'fs';
import {
    exec,
    getBucket,
    uploadDist,
    checkBranchExistsOnGithub,
    FROM_CLIENT_ROOT,
    createCacheInvalidation
} from "./utils";

interface DeployCodeConfig {
    repo: string;
    branch: string;
    build?: boolean;
    prod?: boolean;
}

const processArgv = () => {
    let build = false;

    if (process.argv.find(arg => arg.includes('build') || arg.startsWith('-') && arg.includes('b'))) {
        build = true;
    }

    return {
        build
    }
}

const deploy = async (config: DeployCodeConfig) => {
    const { repo, branch, build } = config;
    let buildPromise: Promise<void | string> = Promise.resolve();

    if (build || !fs.existsSync(FROM_CLIENT_ROOT('dist'))) {
        buildPromise = exec('npm run build:prod')
    }

    const bucketPromise = getBucket({
        repo,
        branch,
        empty: true
    });

    const [Bucket] = await Promise.all([bucketPromise, buildPromise]);

    await uploadDist({ Bucket });
    await createCacheInvalidation({ Bucket })
}

/**
 *
 * IIFE for async and we're off!!
 *
 */
(async () => {
    const args = processArgv();
    console.log(args);

    const { build } = args;
    let { repo, branch } = await checkBranchExistsOnGithub();

    console.log(`deploying ${branch === 'master' ? 'www' : branch}.${process.env.ROOT_DOMAIN}`);
    await deploy({ build, branch, repo });
})();
