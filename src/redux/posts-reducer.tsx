import { InferActionsType, BaseThunkType } from './store';
import { usersType } from '../types/types';


let initialState = {
    posts: [] as Array<usersType>
};

const postsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.posts
            }

        default:
            return state;
    }
}

export const actions = {
    getPosts: (posts: Array<usersType>) => ({ type: 'GET_POSTS', posts } as const),
}



export default postsReducer;

type initialStateType = typeof initialState

type ActionsTypes = InferActionsType<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes>