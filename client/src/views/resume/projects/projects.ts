export const enum Technology {
    JS = "JavaScript",
    TS = "TS",
    NODE = "Node",
    HTML = "HTML",
    CSS = "CSS",
    AWS = "AWS",
    GCP = "GCP",
    WEBPACK = "Webpack",
    CRYPTO = "Crypto",
    IOT = "IOT",
    FULL_STACK = "Full Stack",
    ANGULAR = "Angular",
    REACT = "React",
    REDUX = "Redux",
    REDUX_FORM = "Redux Form",
    MATERIAL_UI = "material ui",
    CSS_MODULES = "CSS Modules",
    MONGO_DB = "MongoDB",
    JQUERY = "jQuery",
    DOCKER = "Docker",
    KUBERNETES = "Kubernetes"
}

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

export const projects: Project[] = [
    {
        hero: {
            src: "/ninja.png",
            alt: "PassNinja logo"
        },
        title: "PassNinja",
        hostedAt: "http://www.passninja.com",
        multiRepo: [
            {
                description: "B2B SaaS API for AppleWallet and GPay Passes",
                skills: ["Serverless, micro-service architecture"],
                stack: [
                    Technology.HTML,
                    Technology.CSS,
                    Technology.JS,
                    Technology.GCP
                ]
            },
            {
                description:
                    "Node.js Typescript CLI app for scanner and decrypting AppleWallet and GPay Passes",
                skills: ["Serverless, micro-service architecture"],
                stack: [
                    Technology.TS,
                    Technology.NODE,
                    Technology.CRYPTO,
                    Technology.IOT
                ]
            },
            {
                description:
                    "Ops and Devops platform for reliably repeatable deployments",
                skills: ["IaC, DNS, SSL/TLS, Edge-Caching, Work-flow Pipelines"]
            }
        ]
    },
    {
        hero: {
            src: "/nomad-devops.png",
            alt: "nomad-devops logo"
        },
        hostedAt: "https://github.com/matthewkeil/nomad-devops",
        title: "nomad-devops",
        description:
            "Full Ops and Devops platform targeted at startups and digital nomads",
        skills: [
            "Managing listener clean-up and memory leak detection",
            "Custom Webpack configuration"
        ],
        stack: [Technology.HTML, Technology.CSS, Technology.GCP]
    },
    {
        hero: {
            src: "/muncher.png",
            alt: "number noshers logo"
        },
        hostedAt: "http://noshers.matthewkeil.com",
        title: "Number Noshers",
        description: "Open source clone of the original number munchers game.",
        skills: [
            "Managing listener clean-up and memory leak detection",
            "Custom Webpack configuration"
        ],
        stack: [
            Technology.HTML,
            Technology.CSS,
            Technology.JS,
            Technology.JQUERY,
            Technology.WEBPACK,
            Technology.GCP
        ]
    },
    {
        title: "Bougie Haus",
        description:
            " Full-Stack React app for researching, aggregating and perfecting recipes",
        hostedAt: "http://bougie.haus",
        hero: {
            src: "bougie-haus.png",
            alt: "bougie haus logo"
        },
        skills: [
            "Integration of UX/UI during wire-framing to promote smooth user flows",
            "Oauth and managing SPA risks during auth flow. Mitigating XSS, CRSF, etc...",
            "Data design theory to avoid user driven duplication"
        ],
        stack: [
            Technology.REACT,
            Technology.REDUX,
            Technology.REDUX_FORM,
            Technology.MATERIAL_UI,
            Technology.CSS_MODULES,
            Technology.NODE,
            Technology.MONGO_DB,
            Technology.WEBPACK,
            Technology.DOCKER,
            Technology.KUBERNETES
        ]
    }
];
