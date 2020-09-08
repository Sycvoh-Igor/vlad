import { InferActionsType, BaseThunkType } from './store';
import { usersType } from '../types/types';
import { usersAPI } from '../api/users';


let initialState = {
    user: {
        id: 1,
        name: 'Name',
        email: 'Email',
        status: 'status',
        gender: 'male',
        created_at: 'today',
        updated_at: 'tomorrow'
    }
};

const userReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export const actions = {
    setUser: (user: usersType) => ({ type: 'SET_USER', user } as const),
}

export const getUserInfo = (id: number): ThunkType => {

    return async (dispatch) => {
        let data = await usersAPI.userInfo(id)
        console.log(typeof data.data);
        dispatch(actions.setUser(data.data))
    }
}


export default userReducer;

type initialStateType = typeof initialState

type ActionsTypes = InferActionsType<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes>