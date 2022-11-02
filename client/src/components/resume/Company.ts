export interface Company {
    name: string;
    date?: string;
    skills?: string[];
    roles?: {
        role: string;
        date?: string;
        description?: string;
        skills?: string[];
    }[];
}