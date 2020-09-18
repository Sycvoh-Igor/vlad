import { PropsType, Data } from './types';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserForm from '../UserForm';
import { RootState } from 'app/store';
import { useHistory, useParams } from 'react-router-dom';
import { editUser, fetchUser } from '../UserInfo/actions';
import Preloader from 'components/preloader/Preloader';



const UserEdit: React.FC<PropsType> = () => {
    const { data } = useSelector((state: RootState) => state.users.user)
    const { editing } = useSelector((state: RootState) => state.users.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams<{ id: string }>();
    const id = +params.id

    const edit = useCallback((data: Data, id?: number) => {
        dispatch(editUser(data, id))
        history.push({
            pathname: `/users/${id}`,
        })
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchUser(id))
    }, [])
    return (
        <> {editing ? <Preloader /> :
            data ?
                data.map((data) =>
                    <UserForm action={edit} data={data} key={data.id} />
                ) : null}

        </>
    )
}

export default UserEdit
