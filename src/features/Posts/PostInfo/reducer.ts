import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
} from './constants'
import { PostState } from "./types";
import { PostActions } from "./actions";


const initialState = {
    data: [],
    fetching: false,
    error: false,
} as PostState;

const postReducer = (state: PostState = initialState, action: PostActions): PostState => {
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


export default postReducer;

