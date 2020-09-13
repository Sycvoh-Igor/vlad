import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { UserState } from "./types";
import { UserActions } from "./actions";


const initialState = {
    data: [],
    fetching: false,
    error: false,
} as UserState;

const userReducer = (state: UserState = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_RESPONSE: {
            const data = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                data
            }
        }

        default:
            return state;
    }
}


export default userReducer;

