import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styles from './UserInfo.module.scss'
import Preloader from 'components/preloader/Preloader';
import { fetchUser, deleteUser } from './actions';
import { NavLink, useHistory, useParams, withRouter } from 'react-router-dom';
import User from './components/User';
import Title from 'components/Title';


let UserInfo: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const { data, error, fetching } = useSelector((state: RootState) => state.users.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams<{ id: string }>();
    const id = +params.id

    const getUser = useCallback(() => {
        dispatch(fetchUser(id))
    }, [dispatch, id])

    const deleteCurrentUser = () => {
        dispatch(deleteUser(id))
        history.push('/users')
    }

    const toggleOpenModal = () => {
        setModalOpen(!modalOpen)
    }

    React.useEffect(() => {
        getUser()
    }, [getUser])

    return (
        <div className={styles.root}>
            { error ? <>
                <div>Что-то пошло не так</div>
                <button onClick={getUser}>Перезагрузить</button>
            </> :
                <>
                    {fetching ? <Preloader /> :
                        data ?
                            data.map((data) =>
                                <div className={styles.info} key={data.id}>
                                    <Title title={`Пользователь ${data.name}`} />
                                    <User user={data} />

                                </div>
                            ) : null
                    }
                    <div className={styles.links}>
                        <NavLink to={'/users/' + id + '/edit'} className='btn btn--lg'>Редактировать</NavLink>
                        <button className='btn btn--lg' onClick={toggleOpenModal}>Удалить</button>

                    </div>
                    {modalOpen && <div className={styles.modal}>
                        <h2>Вы действительно хотите удалить пользователя?</h2>
                        <div className={styles.modal__btns}>
                            {/* <NavLink to={'/users'} className='btn btn--lg'
                                onClick={deleteCurrentUser} >Да</NavLink> */}
                            <button className='btn btn--lg' onClick={deleteCurrentUser}>Да</button>
                            <button className='btn btn--lg' onClick={toggleOpenModal}>Отмена</button>
                        </div>
                    </div>}
                </>
            }
        </div >

    )
}

export default withRouter(UserInfo)
