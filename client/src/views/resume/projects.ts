export const enum Technology {
    HTML = "HTML",
    CSS = "CSS",
    JS = "JavaScript",
    TS = "TypeScript",
    JQUERY = "jQuery",
    WEBPACK = "Webpack",
    GCP = "GCP",
    REACT = "React",
    REDUX = "Redux",
    REDUX_FORM = "Redux Form",
    MATERIAL_UI = "material ui",
    CSS_MODULES = "CSS Modules",
    NODE = "Node",
    MONGO_DB = "MongoDB",
    DOCKER = "docker",
    KUBERNETES = "kubernetes"
}

export interface IResumeProject {
    title: string;
    description: string;
    hostedAt: string;
    hero: {
        src: string;
        alt: string;
    };
    skills: string[];
    stack: Technology[];
}

export const projects: IResumeProject[] = [
    {
        hero: {
            src: "/ninja.png",
            alt: "PassNinja logo"
        },
        hostedAt: "http://www.passninja.com",
        title: "PassNinja",
        description: "B2B SaaS for AppleWallet and GPay Passes",
        skills: [
            "Ops and devops system and processes to support jr. devs",
            "Architecture and development of the API and CLI app",
            "Serverless, micro-service architecture",
            "Deep understanding of multi-client architecture"
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
