import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styles from './UserInfo.module.scss'
import Preloader from 'components/preloader/Preloader';
import { fetchUser } from './actions';
import { useParams, withRouter } from 'react-router-dom';


let UserInfo: React.FC = () => {
    const { data, error, fetching } = useSelector((state: RootState) => state.users.user)
    const dispatch = useDispatch()
    const params = useParams();
    // @ts-ignore
    const id = +params.id
    const getUser = React.useCallback((id: number) => {
        dispatch(fetchUser(id))
    }, [dispatch])

    React.useEffect(() => {
        getUser(id)
    }, [getUser, id])

    return (
        <div className='center'>
            { error ? <>
                <div>Что-то пошло не так</div>
                <button onClick={() => getUser(id)}>Перезагрузить</button>
            </> :
                <>
                    {fetching ? <Preloader /> :
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
                        )
                    }
                </>
            }
        </div >

    )
}

export default withRouter(UserInfo)
