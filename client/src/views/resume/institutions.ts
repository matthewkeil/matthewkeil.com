export interface Institution {
    name: string;
    program: string;
    graduation: string;
    description: string;
}

export const institutions: Institution[] = [
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
