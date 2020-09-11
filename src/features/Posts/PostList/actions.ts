import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { Post } from "./types";
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import { instance } from "api/api";
import { ResponseList } from "types/types";

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, ResponseList<Post>>(FETCH_RESPONSE);


export const fetchPosts = (page: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data } = await instance.get<{ data: ResponseList<Post> }>(`posts`, {
            params: {
                page,
            }
        });
        console.log(data)
        // @ts-ignore
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}

export type PostsActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>