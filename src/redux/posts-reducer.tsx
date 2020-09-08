import { InferActionsType, BaseThunkType } from './store';
import { postType } from '../types/types';
import { postsAPI } from '../api/posts';


let initialState = {
    posts: [] as Array<postType>,
    pageSize: 5,
    totalPostsCount: 19,
    currentPage: 1,
    isFetching: false,
    portionSize: 10,
};

const postsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.users
            }
        case 'POSTS/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'POSTS/SET_TOTAL_POSTS_COUNT': {
            return { ...state, totalPostsCount: action.count }
        }
        case 'POSTS/SET_PAGE_SIZE': {
            return { ...state, pageSize: action.pageSize }
        }
        case 'POSTS/TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    }
}

export const actions = {
    setPosts: (users: Array<postType>) => ({ type: 'SET_POSTS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'POSTS/SET_CURRENT_PAGE', currentPage } as const),
    setTotalPostsCount: (totalCount: number) => ({ type: 'POSTS/SET_TOTAL_POSTS_COUNT', count: totalCount } as const),
    setPageSize: (pageSize: number) => ({ type: 'POSTS/SET_PAGE_SIZE', pageSize } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'POSTS/TOGGLE_IS_FETCHING', isFetching } as const),
}

export const getPostsThunkCreator = (currentPage: number): ThunkType => {

    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await postsAPI.posts(currentPage)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setPosts(data.data))
        dispatch(actions.setPageSize(data.meta.pagination.limit))
        dispatch(actions.setTotalPostsCount(data.meta.pagination.total))
    }
}

export const onPageChangedThunkCreator = (pageNumber: number): ThunkType => {

    return async (dispatch) => {
        dispatch(actions.setCurrentPage(pageNumber))
        dispatch(actions.toggleIsFetching(true))
        let data = await postsAPI.posts(pageNumber)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setPosts(data.data))
    }
}


export default postsReducer;

type initialStateType = typeof initialState

type ActionsTypes = InferActionsType<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes>

