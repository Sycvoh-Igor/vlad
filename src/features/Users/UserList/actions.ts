import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
    FILTER
} from './constants'
import { User, metaType, FilterOption } from './types';
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import { instance } from "api/api";
import { ResponseList } from "types/types";

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, ResponseList<User>>(FETCH_RESPONSE);
export const setFilter = createActionWithPayload<typeof FILTER, FilterOption>(FILTER);


export const fetchUsers = (page: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data } = await instance.get<{ data: User[], meta: metaType, code: number }>(`users`, {
            params: {
                page,
            }
        });
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}

export type UsersActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>
    | ReturnType<typeof setFilter>