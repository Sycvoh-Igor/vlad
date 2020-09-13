import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import { instance } from "api/api";
import { Post } from './types';

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, Array<Post>>(FETCH_RESPONSE);


export const fetchPost = (id: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data: { data } } = await instance.get<{ data: Array<Post> }>(`posts`, {
            params: {
                id,
            }
        });
        console.log(data)
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}

export type PostActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>