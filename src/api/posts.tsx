import { instance } from './api';


export const postsAPI = {
    posts() {
        return instance.get<any>(`posts`).then(res => res.data)
    }
}
