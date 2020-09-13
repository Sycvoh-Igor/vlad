import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { UsersState } from "./types";
import { UsersActions } from "./actions";


const initialState = {
    data: [],
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 20,
    fetching: false,
    error: false,
    filterOption: 'nofilter'
} as UsersState;

const usersReducer = (state: UsersState = initialState, action: UsersActions): UsersState => {
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
                        limit
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
                limit,
                totalPages: pages,
            }
        }

        default:
            return state;
    }
}


export default usersReducer;

