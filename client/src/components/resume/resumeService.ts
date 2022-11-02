import { Project } from "./projects/Project";
import { Institution } from "./Institution";
import { Company } from "./Company";
import { Certification } from "./Certification";

const openSource: Project[] = [
    {
        hero: {
            src: require("../../assets/resume/npm.png"),
            alt: "full-stack-pattern logo"
        },
        title: "full-stack-pattern",
        hostedAt: "https://full-stack-pattern.matthewkeil.com/docs/intro",
        stack: ["TS", "NODE", "AWS", "CDK", "CLOUDFORMATION"],
        description:
            "L3 CDK Pattern that builds up to 5 stacks of resources. Configured for least-privilege with enterprise in mind.  Includes hot-reload dev server that is configured right from your swagger definition"
    },
    {
        hero: {
            src: require("../../assets/resume/npm.png"),
            alt: "convert-lambda-to-express logo"
        },
        title: "lambda-to-express",
        hostedAt: "https://www.npmjs.com/package/convert-lambda-to-express",
        stack: ["TS", "NODE", "AWS", "LAMBDA"],
        description:
            "Production-ready package to run your lambda workloads as an express server. Built for developers and safe for production use by enterprise.  Hot-reload server built on top of express."
    }
];

const closedSource: Project[] = [
    {
        hero: {
            src: require("../../assets/resume/infinite-objects.png"),
            alt: "InfiniteObjects logo"
        },
        title: "Infinite Objects",
        hostedAt: "https://www.infiniteobjects.com",
        skills: [
            "Solidity development and deployment with a close watch on safe-coding",
            "Extensive work integrating web2 with web3 (shopify, sentry, etc)",
            "Rush.js repo management for handling a large code-base"
        ],
        stack: [
            "SOLIDITY",
            "TS",
            "ETHEREUM",
            "POLYGON",
            "IPFS",
            "HARDHAT",
            "ETHERSJS",
            "CRYPTO",
            "GCP"
        ]
    },
    {
        hero: {
            src: require("../../assets/resume/voice-foundry.png"),
            alt: "VoiceFoundry logo"
        },
        title: "VoiceFoundry",
        hostedAt: "https://www.voicefoundry.com",
        skills: [
            "Rebuilt voicemail product to reduce average deploy time (10 hours to 15 minutes)",
            "Developed training program to onboard TTEC employees after merger",
            "Initial development and maintainer cdk-resources repo that all VF teams are migrating towards (16 contributors, 500 commits)",
            "World's first to deploy Network Firewall Manager with CloudFormation. Worked with AWS to help them update their documentation (4000+ line template)"
        ],
        stack: [
            "TS",
            "NODE",
            "CDK",
            "SSO",
            "COGNITO",
            "VPC",
            "CLOUDFORMATION",
            "SHELL"
        ]
    },
    {
        hero: {
            src: require("../../assets/resume/pass-ninja.png"),
            alt: "PassNinja logo"
        },
        title: "PassNinja",
        hostedAt: "https://www.passninja.com",
        multiRepo: [
            {
                description: "CLI Application",
                skills: [
                    "Node.js/TypeScript for scanning and decrypting AppleWallet and GPay Passes",
                    "Implemented NFC scans via PC/SC. OAuth secured communication via Mqtt"
                ],
                stack: [
                    "NODE",
                    "TS",
                    "NFC",
                    "CRYPTO",
                    "IOT",
                    "APPLE_WALLET",
                    "G_PAY"
                ]
            },
            {
                description: "OPS, Devops, CI/CD and Scripting",
                skills: [
                    "Scripting for dev team, service and asset management",
                    "Implemented IaC for Hosting, DNS, SSL/TLS and Work-Flow Pipelines"
                ],
                stack: [
                    "AWS",
                    "CLOUDFORMATION",
                    "ROUTE53",
                    "CERT_MANAGER",
                    "CODE_BUILD",
                    "CODE_PIPELINE",
                    "COGNITO"
                ]
            },
            {
                description: "Serverless API",
                skills: [
                    "b2b SaaS for creating AppleWallet and GPay Passes",
                    "Built full library for creating apple passes"
                ],
                stack: [
                    "TS",
                    "NODE",
                    "API_GATEWAY",
                    "LAMBDA",
                    "DYNAMO_DB",
                    "APPLE_WALLET",
                    "G_PAY"
                ]
            }
        ]
    }
    // {
    //     hero: {
    //         src: require("../../assets/resume/nomad-devops.png"),
    //         alt: "nomad-devops logo"
    //     },
    //     hostedAt: "https://github.com/matthewkeil/nomad-devops",
    //     title: "nomad-devops",
    //     description: "Open source, easy-to-use Ops and Devops system",
    //     skills: [
    //         "Minimize cost of deployment for freelancers, small firms and startups",
    //         "Features like branch deployments and built-in https"
    //     ],
    //     stack: [
    //         "TS",
    //         "NODE",
    //         "AWS",
    //         "CLOUDFORMATION",
    //         "ROUTE53",
    //         "CLOUDFRONT",
    //         "S3"
    //     ]
    // },
    // {
    //     hero: {
    //         src: require("../../assets/resume/muncher.png"),
    //         alt: "number noshers logo"
    //     },
    //     hostedAt: "https://github.com/matthewkeil/number-noshers",
    //     title: "Number Noshers",
    //     description: "Open source clone of the original number munchers game.",
    //     skills: [
    //         "Managing listener clean-up and memory leak detection",
    //         "Custom Webpack configuration"
    //     ],
    //     stack: ["HTML", "CSS", "JS", "JQUERY", "WEBPACK", "AWS"]
    // }
    // {
    //     title: "Bougie Haus",
    //     description:
    //         " Full-Stack React app for researching, aggregating and perfecting recipes",
    //     hostedAt: "http://bougie.haus",
    //     hero: {
    //         src: "bougie-haus.png",
    //         alt: "bougie haus logo"
    //     },
    //     skills: [
    //         "Integration of UX/UI during wire-framing to promote smooth user flows",
    //         "Oauth and managing SPA risks during auth flow. Mitigating XSS, CRSF, etc...",
    //         "Data design theory to avoid user driven duplication"
    //     ],
    //     stack: [
    //         "REACT",
    //         "REDUX",
    //         // "REDUX_FORM",
    //         "MATERIAL_UI",
    //         "CSS_MODULES",
    //         "NODE",
    //         "MONGO_DB",
    //         "WEBPACK",
    //         "DOCKER",
    //         "KUBERNETES"
    //     ]
    // }
];

const institutions: Institution[] = [
    // {
    //     name: "Ironhack",
    //     program: "Web Development",
    //     graduation: "Jan 2019",
    //     description: "Specialties: JavaScript, React.js, Node.js, MongoDB, Git"
    // },
    {
        name: "University of Florida",
        program: "B.S. in Mechanical Engineering",
        graduation: "May 2005",
        description:
            "Research: Solar Thermal Co-Generation of Power and Cooling"
    }
];

const companies: Company[] = [
    {
        name: "InfiniteObjects",
        roles: [
            {
                role: "Senior Blockchain Engineer",
                date: "3/22-current"
            }
        ]
    },
    {
        name: "VoiceFoundry",
        roles: [
            {
                role: "Principal Developer",
                date: "5/21-3/22",
                skills: ["Spearheaded corporate-wide SSO"]
            },
            {
                role: "Senior Developer",
                date: "12/20-5/21",
                skills: ["Developed training program"]
            },
            {
                role: "Developer",
                date: "8/20-12/20",
                skills: ["World's first deployment of NFM"]
            }
        ]
    },
    {
        name: "Flomio Inc.",
        roles: [
            {
                role: "Lead Full-Stack Developer",
                date: "9/19-8/20",
                skills: [
                    "Applied management experience and learned software industry specifics"
                ]
            },
            {
                role: "Jr. Full-Stack Developer ",
                date: "3/19-9/19",
                skills: [
                    "Learned a new industry while meeting and exceeding performance goals"
                ]
            }
        ]
    },
    // {
    //     name: "Sabbatical",
    //     skills: ["PADI Dive Instructor", "Photographer"]
    // },
    {
        name: "AvalonBay Communities",
        roles: [
            {
                role: "Portfolio Maintenance Director",
                date: "8/11-10/12",
                description: "Executive",
                skills: [
                    "Oversaw $1.1B",
                    "Ability to balance the needs of multiple projects and teams"
                ]
            },
            {
                role: "Lead Superintendent",
                date: "4/11 – 8/11",
                description: "Renovate AVA Nob Hill",
                skills: [
                    "Part of a cross-functional team that organized a re-branding initiative"
                ]
            },
            {
                role: "Superintendent",
                date: "11/10-4/11",
                description: "Renovate Sunset Towers",
                skills: [
                    "Ensured a tight quality control process and on-time delivery"
                ]
            },
            {
                role: "Project Manager",
                date: "4/10 – 11/10",
                description: "Renovate Mission Bay North",
                skills: [
                    "Wore multiple hats while working toward goals, without external motivation"
                ]
            },
            {
                role: "Travelling Assistant Superintendent",
                date: "8/09 – 3/10",
                description: "Avalon Bellevue Towers",
                skills: [
                    "Met team production goals while remotely coordinating with operations"
                ]
            },
            {
                role: "Assistant Project Manager",
                date: "6/07 – 8/09",
                description: "Avalon Mission Bay, Phase 3",
                skills: [
                    "Accomplished rigorous San Francisco plan-check and permitting processes"
                ]
            }
        ]
    }
];

const certifications: Certification[] = [
    {
        name: "AWS Developer-Associate",
        imgSrc: require("../../assets/resume/AWS-Developer-Associate-2020.png"),
        url:
            "https://www.credly.com/badges/f1db9c36-2939-4f86-9595-0283971922e8"
    },
    {
        name: "Node.js Service Developer",
        imgSrc: require("../../assets/resume/jsnsd-badge.png"),
        url:
            "https://www.credly.com/badges/f1a1bd1a-8a67-491b-8b9f-fca2378ce99c"
    },
    {
        name: "Node.js Application Developer",
        imgSrc: require("../../assets/resume/jsnad-badge.png"),
        url:
            "https://www.credly.com/badges/aa9c3fbd-e469-41b2-a8cf-c77c4a546e94"
    }
];

class ResumeService {
    get openSource() {
        return openSource;
    }

    get closedSource() {
        return closedSource;
    }

    get institutions() {
        return institutions;
    }

    get companies() {
        return companies;
    }

    get certifications() {
        return certifications;
    }
}

const resumeService = new ResumeService();
export { resumeService };
