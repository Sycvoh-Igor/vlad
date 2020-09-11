import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { UserState } from "./types";
import { UsersActions } from "./actions";


const initialState = {
    data: [],
    total: 0,
    page: 1,
    totalPages: 1,
    fetching: false,
    error: false,
} as UserState;

const usersReducer = (state: UserState = initialState, action: UsersActions): UserState => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_RESPONSE: {
            const {
                data,
                meta: {
                    pagination: {
                        page,
                        pages,
                        total,
                    }
                },
            } = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                data,
                total,
                page,
                totalPages: pages,
            }
        }

        default:
            return state;
    }
}


export default usersReducer;

