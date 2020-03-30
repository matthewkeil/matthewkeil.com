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