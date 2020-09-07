export type usersType = {
    id: number,
    name: string,
    email: string,
    status: string,
    gender: string,
    created_at: string,
    updated_at: string
}

export type PostType = {
    id: number,
    user_id: number,
    title: string,
}