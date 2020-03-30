import { Technology } from "./projects/Technology";
import { Project } from "./projects/Project";
import { Institution } from "./Institution";
import { Company } from "./Company";

const projects: Project[] = [
    {
        hero: {
            src: require("../../assets/resume/pass-ninja.png"),
            alt: "PassNinja logo"
        },
        title: "PassNinja",
        hostedAt: "http://www.passninja.com",
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
                    "Cloudformation Expertise for Reliably Repeatable Environments",
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
                    "Architect/Developer of serverless platform",
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
    },
    {
        hero: {
            src: require("../../assets/resume/nomad-devops.png"),
            alt: "nomad-devops logo"
        },
        hostedAt: "https://github.com/matthewkeil/nomad-devops",
        title: "nomad-devops",
        description: "Open source, easy-to-use Ops and Devops system",
        skills: [
            "Minimize cost of deployment for freelancers, small firms and startups",
            "Features like branch deployments and built-in https"
        ],
        stack: [
            "TS",
            "NODE",
            "AWS",
            "CLOUDFORMATION",
            "ROUTE53",
            "CLOUDFRONT",
            "S3"
        ]
    },
    {
        hero: {
            src: require("../../assets/resume/muncher.png"),
            alt: "number noshers logo"
        },
        hostedAt: "https://github.com/matthewkeil/number-noshers",
        title: "Number Noshers",
        description: "Open source clone of the original number munchers game.",
        skills: [
            "Managing listener clean-up and memory leak detection",
            "Custom Webpack configuration"
        ],
        stack: ["HTML", "CSS", "JS", "JQUERY", "WEBPACK", "AWS"]
    }
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
        name: "Ironhack",
        program: "Web Development",
        graduation: "Jan 2019",
        description: "Specialties: JavaScript, React.js, Node.js, MongoDB, Git"
    },
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
        name: "Flomio Inc.",
        roles: [
            {
                role: "Lead Full-Stack Developer",
                date: "9/19 - current",
                description: "PassNinja.com",
                skills: [
                    "Applied management experience and learned software industry specifics"
                ]
            },
            {
                role: "Jr. Full-Stack Developer, Remote",
                date: "3/19 - 9/19",
                description: "PassNinja.com",
                skills: [
                    "Learned a new industry while meeting and exceeding performance goals"
                ]
            }
        ]
    },
    {
        name: "Sabbatical",
        skills: ["PADI Dive Instructor", "Photographer"]
    },
    {
        name: "AvalonBay Communities",
        roles: [
            {
                role: "Portfolio Maintenance Director",
                date: "8/11 - 10/12",
                description: "Executive overseeing $1.1B",
                skills: [
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
                date: "11/10 - 4/11",
                description: "Renovate Sunset Towers",
                skills: [
                    "Helped ensure a tight quality control process for on-time delivery and high customer satisfaction"
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
                    "Accomplished rigorously detailed San Francisco plan-check and permitting processes"
                ]
            }
        ]
    }
];

class ResumeService {
    get projects() {
        return projects;
    }

    get institutions() {
        return institutions;
    }

    get companies() {
        return companies;
    }
}

let _resumeService!: ResumeService;

export const resumeService = !_resumeService
    ? (_resumeService = new ResumeService())
    : _resumeService;
