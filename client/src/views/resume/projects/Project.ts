import { Technology } from "./Technology";

interface BaseRepoInfo {
    description?: string;
    skills?: string[];
    stack?: Technology[];
}

interface ExtendedInfo {
    hero: {
        src: string;
        alt: string;
    };
    title: string;
    hostedAt: string;
}

type SingleRepo = BaseRepoInfo & ExtendedInfo;

interface MultiRepo extends ExtendedInfo {
    skills?: string[];
    multiRepo: BaseRepoInfo[];
}

export type Project = SingleRepo | MultiRepo;
