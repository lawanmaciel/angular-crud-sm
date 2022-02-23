export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

export interface RequestCreate {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
export interface ResponseCreate {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ResponseUser{
    data: User
}

export interface RequestUpdate {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ResponseUpdate {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}