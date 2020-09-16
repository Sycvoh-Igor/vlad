import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { Post, FilterType } from './types';
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import { instance } from "api/api";
import { ResponseList } from "types/types";
import { metaType } from '../../Users/UserList/types';

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, ResponseList<Post>>(FETCH_RESPONSE);


export const fetchPosts = (page: number, filter: FilterType): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data } = await instance.get<{ data: Post[], meta: metaType, code: number }>(`posts`, {
            params: {
                page,
                user_id: filter.userId,
                title: filter.title
            }
        });
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}

export type PostsActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>