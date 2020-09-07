import { InferActionsType, BaseThunkType } from './store';
import { usersType } from '../types/types';
import { usersAPI } from '../api/users';


let initialState = {
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of users id
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
    toggleIsFetching: (isFetching: boolean) => ({ type: 'USERS/TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'USERS/TOGGLE_FOLLOWING_PROGRESS', isFetching, userId } as const)
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {

    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await usersAPI.users(currentPage, pageSize)
        await console.log(data);
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.data))
        dispatch(actions.setTotalUsersCount(data.meta.pagination.total))
    }
}

//второй способ типизации Thunk использовать ThunkAction из библиотеки redux-thunk
export const onPageChangedThunkCreator = (pageNumber: number,
    pageSize: number): ThunkType => {

    return async (dispatch) => {
        dispatch(actions.setCurrentPage(pageNumber))
        dispatch(actions.toggleIsFetching(true))
        let data = await usersAPI.users(pageNumber, pageSize)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.data))
    }
}


export default usersReducer;

type initialStateType = typeof initialState

type ActionsTypes = InferActionsType<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes>