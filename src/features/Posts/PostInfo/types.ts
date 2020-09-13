export interface Post {
    id: number,
    user_id: number,
    title: string,
    body: string,
    created_at: string,
    updated_at: string
}

export interface PostState {
    data: Array<Post>,
    fetching: boolean,
    error: boolean,
}










