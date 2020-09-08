import { instance, GetItemsType } from './api';
import { usersType } from '../types/types';


export const usersAPI = {
    users(currentPage = 1) {
        return instance.get<GetItemsType<usersType>>(`users?page=${currentPage}`)
            .then(res => res.data)
    }
}
