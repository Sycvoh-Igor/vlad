import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styles from './UserInfo.module.scss'
import Preloader from 'components/preloader/Preloader';
import { fetchUser, deleteUser } from './actions';
import { NavLink, useParams, withRouter } from 'react-router-dom';


let UserInfo: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const { data, error, fetching } = useSelector((state: RootState) => state.users.user)
    const dispatch = useDispatch()
    const params = useParams();
    // @ts-ignore
    const id = +params.id

    const getUser = React.useCallback(() => {
        dispatch(fetchUser(id))
    }, [dispatch, id])

    const deleteCurrentUser = () => {
        dispatch(deleteUser(id))
    }

    const toggleOpenModal = () => {
        setModalOpen(!modalOpen)
    }

    React.useEffect(() => {
        getUser()
    }, [getUser, id])

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
                                <div key={data.id} >
                                    <h1>Пользователь {data.name}</h1>
                                    <ul className={styles.userInfo}>
                                        <li className={styles.userInfo__item}>Пользователь id:{data.id}</li>
                                        <li className={styles.userInfo__item}>Статус: {data.status}</li>
                                        <li className={styles.userInfo__item}>Пол: {data.gender}</li>
                                        <li className={styles.userInfo__item}>Email: {data.email}</li>
                                        <li className={styles.userInfo__item}>Создан: {data.created_at}</li>
                                        <li className={styles.userInfo__item}>Обновлен: {data.updated_at}</li>
                                    </ul>
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
                            <NavLink to={'/users/'} className='btn btn--lg'
                                onClick={deleteCurrentUser} >Да</NavLink>
                            <button className='btn btn--lg' onClick={toggleOpenModal}>Отмена</button>
                        </div>
                    </div>}
                </>
            }
        </div >

    )
}

export default withRouter(UserInfo)
