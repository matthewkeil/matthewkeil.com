require("dotenv").config();

import {
    createCacheInvalidation,
    bucketExists,
    emptyBucket,
    handleStackCreateAndUpdate,
    uploadDirectory
} from "./aws";
import {
    exec,
    getLocalGitBranch,
    getDomainName,
    pascalCaseDomainName,
} from "./utils";
import { config } from "../config";
import { clientTemplate } from "../aws/client";
import { getClientBuildCommand } from "./utils/getClientBuildCommand";

export const deployClient = async () => {
    const branch = getLocalGitBranch();
    console.log(`deploying current git branch: ${branch}`);

    let rebuild = false;
    if (process.argv.find(arg => arg.includes("build"))) {
        rebuild = true;
    }

    let buildPromise: Promise<void | string> = Promise.resolve();
    if (rebuild) {
        const command = await getClientBuildCommand();
        console.log(`rebuilding client repo using "${command}"`);
        buildPromise = exec(`cd client && ${command}`);
    }

    // make sure bucket exists, if not build stack with bucket and routing
    const Bucket = getDomainName({
        branch,
        domain: config.ROOT_DOMAIN
    });

    let bucketPromise: Promise<void>;
    if (await bucketExists({ Bucket })) {
        console.log(`found existing artifacts bucket ${Bucket}`);

        bucketPromise = emptyBucket({ Bucket });
    } else {
        console.log(`building bucket and dns routing stack for ${Bucket}`);
        const StackName = `client-${pascalCaseDomainName(Bucket)}`;
        const TemplateBody = clientTemplate({ branch, StackName });

        bucketPromise = handleStackCreateAndUpdate({
            StackName,
            TemplateBody
        });
    }

    await Promise.all([bucketPromise, buildPromise]);

    await uploadDirectory({ Bucket, localPath: "client/dist" });

    await createCacheInvalidation({ Bucket });
};
