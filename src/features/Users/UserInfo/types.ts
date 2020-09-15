export interface User {
    id: number,
    name: string,
    email: string,
    status: string,
    gender: string,
    created_at: string,
    updated_at: string
}

export interface UserState {
    data: Array<User> | null,
    fetching: boolean,
    error: boolean,
    deleting: boolean,
}






