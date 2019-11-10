import * as childProcess from "child_process";
import * as Octokit from "@octokit/rest";
import * as PATH from 'path';

export const FROM_CLIENT_ROOT = (...segments: string[]) =>
    PATH.resolve(__dirname, "..", "..", ...segments);

export const exec = (command: string) =>
    new Promise<string>(async (resolve, reject) => {
        const child = childProcess.exec(command, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        child.stdout!.on("data", data => console.log(data));
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        child.stderr!.on("data", data => console.error(data));
    });

/**
 *
 * 
 * github project constants and branch validation
 * verifies local working branch exists on github and return name or throws error
 *
 * 
 */
const owner = "flomio";
const repo = "passninja-web";

export const getLocalBranch = () => {
    const output = childProcess.execSync("git status");
    const results = /^On\sbranch\s([\S]*).*/.exec(output.toString());
    if (!results) {
        throw new Error("Cannot determine what branch you are on");
    }
    return results[1];
}

export const checkBranchExistsOnGithub = async () => {
    let branches;
    const localBranch = getLocalBranch();
    const octokit = new Octokit({
        auth: process.env.GITHUB_ACCESS_TOKEN
    });

    try {
        branches = await octokit.repos.listBranches({
            owner,
            repo
        });
    } catch (err) {
        if (err.name == 'HttpError') {
            throw new Error('GITHUB_ACCESS_TOKEN is missing from your .env file');
        }
        throw err
    }

    if (
        branches.data &&
        Array.isArray(branches.data) &&
        branches.data.findIndex((b: any) => b.name === localBranch) === -1
    ) {
        throw new Error(
            `branch ${localBranch} does not exist on ${owner}/${repo}`
        );
    }

    return {
        owner,
        repo,
        branch: localBranch
    };
};

export const getDomaintName = ({ branch, domain }: { branch: string, domain: string }) => {
    let _branch = branch;

    if (branch === 'master') {
        _branch = 'www';
    }
    return `${_branch}.${domain}`
}
