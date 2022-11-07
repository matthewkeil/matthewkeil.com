import { Project } from "./projects/Project";
import { Institution } from "./Institution";
import { Company } from "./Company";
import { Certification } from "./Certification";

const summary: string = `I am a classically trained engineer and my computer savvy has been a huge boon throughout my life.
\xa0My hunger and spirit of constant learning allow me to be the best software engineer I can, and a passion for blockchain technology is what drove me to learn to code.
\xa0It's a huge personal honor to work in the industry.
\xa0I have high hopes for blockchain's potential, yet they are hopes that are built on a foundation of sound business experience and computer science fundamentals.
\xa0My hands on approach to life helps me work through the toughest problems and my confidence and soft skills, honed by working with others through difficult situations, allow me to integrate smoothly with fast moving teams.`;

const openSource: Project[] = [
    {
        hero: {
            src: require("../../assets/resume/npm.png"),
            alt: "convert-lambda-to-express logo"
        },
        title: "lambda-to-express",
        hostedAt: "https://www.npmjs.com/package/convert-lambda-to-express",
        stack: ["TS", "NODE", "AWS", "LAMBDA"],
        description: `Production-ready package to run your lambda workloads as an express server. Hot-reload for serverless api's. Built for developers and tested for production by enterprise.`
    },
    {
        hero: {
            src: require("../../assets/resume/npm.png"),
            alt: "full-stack-pattern logo"
        },
        title: "full-stack-pattern",
        hostedAt: "https://full-stack-pattern.matthewkeil.com/docs/intro",
        stack: ["TS", "NODE", "AWS", "CDK", "CLOUDFORMATION"],
        description: `Level 3 CDK pattern that builds up to 5 stacks of resources. Everything from DNS resolution to Cognito user groups. Configured for least-privilege with enterprise in mind. Uploads backend configuration to your edge-cached SPA hosted in S3.`
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
            "Solidity development, with a keen watch on safe-coding best-practices",
            "Extensive work integrating web2 with web3 (gcp, shopify, infura, opensea)",
            "Rush.js repo management for handling a large code-base"
        ],
        stack: [
            "TS",
            "NODE",
            "STENCIL",
            "SOLIDITY",
            "POLYGON",
            "IPFS",
            "GCP",
            "TERRAFORM"
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
            "Rebuilt voicemail product to reduce average deploy time (10 hrs to 15 min)",
            "Initial development and maintainer of cdk-resources repo that all teams migrated towards (20+ contributors)",
            "World's first to deploy Network Firewall Manager with CloudFormation. Worked with AWS to help them update their documentation (4000+ line template)"
        ],
        stack: [
            "TS",
            "NODE",
            "SHELL",
            "CDK",
            "TERRAFORM",
            "SSO",
            "VPC",
            "ANGULAR"
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
                description: "CLI (Raspberry-Pi) Application",
                skills: [
                    "Node.js/TypeScript for scanning and decrypting AppleWallet and GPay Passes",
                    "Implemented NFC scans via native C bindings (PC/SC over usb)",
                    "OAuth secured communication via Mqtt"
                ],
                stack: [
                    "TS",
                    "NODE",
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
                    "TS",
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
    {
        name: "University of Florida",
        program: "B.S. in Mechanical Engineering",
        graduation: "May 2005",
        description:
            "Research: Solar Thermal Co-Generation of Power and Cooling"
    },
    // {
    //     name: "Ironhack",
    //     program: "Web Development",
    //     graduation: "Jan 2019",
    //     description: "Specialties: JavaScript, React.js, Node.js, MongoDB, Git"
    // },
    {
        name: "Utila Dive Center",
        program: "PADI Instructor",
        graduation: "Aug 2016",
        description:
            "Instructor of Search and Rescue, Emergency First Response, Tri-Mix Gas Blending, Wreck and Open-Water Diving.\xa0\xa0Divemaster"
    }
];

const companies: Company[] = [
    {
        name: "InfiniteObjects",
        roles: [
            {
                role: "Senior Blockchain Engineer",
                date: "3/22 – current",
                skills: [
                    "Deep understanding web3 best practices",
                    "Integration with web2 in production"
                ]
            }
        ]
    },
    {
        name: "VoiceFoundry",
        roles: [
            {
                role: "Principal Developer",
                date: "5/21 – 3/22",
                skills: ["Head of product development team"]
            },
            {
                role: "Senior Developer",
                date: "12/20 – 5/21",
                skills: [
                    "Revolutionized deployment methodologies",
                    "Built on-boarding and training program"
                ]
            },
            {
                role: "Developer",
                date: "8/20 – 12/20",
                skills: [
                    "Built and maintained core libraries that got adopted by all teams"
                ]
            }
        ]
    },
    {
        name: "Flomio Inc.",
        roles: [
            {
                role: "Lead Full-Stack Developer",
                date: "9/19 – 8/20",
                skills: ["Applied management experience"]
            },
            {
                role: "Jr. Full-Stack Developer ",
                date: "3/19 – 9/19",
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
                date: "8/11 – 10/12",
                description: "Executive",
                skills: [
                    "Oversaw management of $1.1B in assets",
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
                date: "11/10 – 4/11",
                description: "Renovate Sunset Towers",
                skills: [
                    "Ensured a tight quality control process and on-time delivery"
                ]
            },
            {
                role: "Project Manager, Superintendent",
                date: "4/10 – 11/10",
                description: "Renovate Mission Bay North",
                skills: [
                    "Wore multiple hats while working toward goals, without external motivation"
                ]
            },
            {
                role: "Traveling Assistant Superintendent",
                date: "8/09 – 3/10",
                description: "Avalon Bellevue Towers",
                skills: [
                    "Met local-team production goals while remotely coordinating with operations"
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
        name: "Node.js\nApplication\nDeveloper",
        imgSrc: require("../../assets/resume/jsnad-badge.png"),
        url:
            "https://www.credly.com/badges/aa9c3fbd-e469-41b2-a8cf-c77c4a546e94"
    },
    {
        name: "Node.js\nService\nDeveloper",
        imgSrc: require("../../assets/resume/jsnsd-badge.png"),
        url:
            "https://www.credly.com/badges/f1a1bd1a-8a67-491b-8b9f-fca2378ce99c"
    },
    {
        name: "AWS\nDeveloper\nAssociate",
        imgSrc: require("../../assets/resume/AWS-Developer-Associate-2020.png"),
        url:
            "https://www.credly.com/badges/f1db9c36-2939-4f86-9595-0283971922e8"
    }
];

class ResumeService {
    get summary() {
        return summary;
    }

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
