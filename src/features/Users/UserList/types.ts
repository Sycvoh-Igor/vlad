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

export interface UsersState {
    data: Array<User>,
    total: number,
    page: number,
    totalPages: number,
    limit: number,
    fetching: boolean,
    error: boolean,
    filterOption: string
}

export type metaType = {
    pagination: paginationType
}
type paginationType = {
    total: number,
    pages: number,
    page: number,
    limit: number
}


