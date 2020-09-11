import React from 'react'
import Preloader from 'components/preloader/Preloader';
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import Paginator from 'components/paginator';
import User from 'components/Users/User/User';
import { fetchUsers } from './actions';
import styles from './UsersList.module.scss'


let UsersList: React.FC = () => {
    const { page, totalPages, fetching, data, total, error } = useSelector((state: RootState) => state.users.userList)
    const dispatch = useDispatch()

    const onClickPageChange = (currentPage: number) => {
        dispatch(fetchUsers(currentPage))
    }

    React.useEffect(() => {
        onClickPageChange(page)
    }, [])

    return (
        <div className={styles.postsStyle}>
            <h1>Пользователи</h1>
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={totalPages} portionSize={20} />
            { error ? <div>Что-то пошло не так</div> :
                <div className={styles.postsStyle__content}>
                    {fetching ? <Preloader /> :
                        data.map((u) =>
                            <User user={u} key={`${u.id}`} />
                        )
                    }
                </div>
            }
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={totalPages} portionSize={20} />
        </div>
    )
}

export default UsersList