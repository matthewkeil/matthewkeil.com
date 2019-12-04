export interface Company {
    name: string;
    skills?: string[];
    roles?: {
        role: string;
        date: string;
        description: string;
        skills?: string[];
    }[];
}

export const companies: Company[] = [
    // {
    //     name: "Flomio Inc.",
    //     roles: [
    //         {
    //             role: "Lead Full-Stack Developer",
    //             date: "",
    //             description: "Remotely ",
    //             skills: []
    //         },
    //         {
    //             role: "Jr. Full-Stack Developer, Remote",
    //             date: "",
    //             description: "Remote",
    //             skills: [
    //                 "Mqtt for communications",
    //                 "Rebuild CLI",
    //                 "Rebuilt API"
    //             ]
    //         }
    //     ]
    // },
    {
        name: "Sabbatical",
        skills: [
            "Professional photographer",
            "Emergency First Response Instructor",
            "Earned several PADI Instructor ratings"
        ]
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
    },
    {
        name: "Stiles Construction",
        roles: [
            {
                role: "Assistant Superintendent",
                date: "5/05 – 11/06",
                description: "Wilton Station",
                skills: [
                    "Learned a new industry while meeting and exceeding performance goals"
                ]
            }
        ]
    }
];
