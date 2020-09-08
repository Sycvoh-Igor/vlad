import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://gorest.co.in/public-api',
    headers: {
        Authorization: 'Bearer 44477d174574afb701e8bc400eb7ead5a4b6352c91e1beab31582cd6f3d7e763',
    },
});

export type GetItemsType<T> = {
    data: Array<T>,
    meta: metaType,
    code: string | null
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





