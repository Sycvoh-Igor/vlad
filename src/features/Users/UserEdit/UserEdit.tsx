import { PropsType, Data } from './types';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserForm from '../UserForm';
import { RootState } from 'app/store';
import { useHistory } from 'react-router-dom';
import { editUser } from '../UserInfo/actions';



const UserEdit: React.FC<PropsType> = () => {
    const { data } = useSelector((state: RootState) => state.users.user)

    const dispatch = useDispatch()
    const history = useHistory()

    const edit = (data: Data, id?: number) => {
        dispatch(editUser(data, id))
        history.push({
            pathname: `/users/${id}`,
        })
    }
    return (
        <>
            { data ?
                data.map((data) =>
                    <UserForm action={edit} data={data} key={data.id} />
                ) : null}
        </>
    )
}

export default UserEdit
