import { instance, GetItemsType } from './api';


export const usersAPI = {
    users(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&limit=${pageSize}`)
            .then(res => res.data)
    }
}
