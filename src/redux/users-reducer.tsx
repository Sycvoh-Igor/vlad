import { InferActionsType, BaseThunkType } from './store';
import { usersType } from '../types/types';
import { usersAPI } from '../api/users';


let initialState = {
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    portionSize: 10,
};

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'USERS/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'USERS/SET_TOTAL_USERS_COUNT': {
            return { ...state, totalUsersCount: action.count }
        }
        case 'USERS/SET_PAGE_SIZE': {
            return { ...state, pageSize: action.pageSize }
        }
        case 'USERS/TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    }
}

export const actions = {
    setUsers: (users: Array<usersType>) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'USERS/SET_CURRENT_PAGE', currentPage } as const),
    setTotalUsersCount: (totalCount: number) => ({ type: 'USERS/SET_TOTAL_USERS_COUNT', count: totalCount } as const),
    setPageSize: (pageSize: number) => ({ type: 'USERS/SET_PAGE_SIZE', pageSize } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'USERS/TOGGLE_IS_FETCHING', isFetching } as const),
}

export const getUsersThunkCreator = (currentPage: number): ThunkType => {

    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await usersAPI.users(currentPage)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.data))
        dispatch(actions.setPageSize(data.meta.pagination.limit))
        dispatch(actions.setTotalUsersCount(data.meta.pagination.total))
    }
}

export const onPageChangedThunkCreator = (pageNumber: number): ThunkType => {

    return async (dispatch) => {
        dispatch(actions.setCurrentPage(pageNumber))
        dispatch(actions.toggleIsFetching(true))
        let data = await usersAPI.users(pageNumber)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.data))
    }
}


export default usersReducer;

type initialStateType = typeof initialState

type ActionsTypes = InferActionsType<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes>