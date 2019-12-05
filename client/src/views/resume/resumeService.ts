import { Technology } from "./projects/Technology";
import { Project } from "./projects/Project";
import { Institution } from "./Institution";
import { Company } from "./Company";

const projects: Project[] = [
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
