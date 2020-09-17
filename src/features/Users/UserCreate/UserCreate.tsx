import { PropsType, Data } from './types';
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../UserList/actions';
import UserForm from '../UserForm';



const UserCreate: React.FC<PropsType> = () => {
    const dispatch = useDispatch()

    const create = (data: Data) => {
        dispatch(createUser(data))
    }
    return (
        <UserForm action={create} />
    )
}

export default memo(UserCreate)
