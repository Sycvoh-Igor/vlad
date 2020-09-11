export type UsersProps = {
    users: Array<User>
    currentPage: number,
    pageSize: number,
    totalPostsCount: number,
    portionSize: number,
    isFetching: boolean,
    onPageChanged: (pageNumber: number) => void
};

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
    data: Array<User>,
    total: number,
    page: number,
    totalPages: number,
    fetching: boolean,
    error: boolean,
}

export interface UserResponse {
    data: User[],
    meta: metaType
}

type metaType = {
    pagination: paginationType
}
type paginationType = {
    total: number,
    pages: number,
    page: number,
    limit: number
}

