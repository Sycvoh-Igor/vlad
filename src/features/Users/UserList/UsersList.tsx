import React from 'react'
import Preloader from 'components/preloader/Preloader';
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import Paginator from 'components/paginator';
import User from 'components/User/User';
import { fetchUsers } from './actions';
import Title from 'components/Title';
import Filter from 'components/Filter';
import { filterType } from './types';
import styles from './UsersList.module.scss'
import { NavLink } from 'react-router-dom';
// import Card from 'components/Card';



const filterItems: Array<filterType> = [
    { name: 'Имя пользователя', type: 'name' },
    { name: 'Мужчина', type: 'gender', option: 'male' },
    { name: 'Женщина', type: 'gender', option: 'female' },
    { name: 'Статус пользователя: активный', type: 'status', option: 'active' },
    { name: 'Статус пользователя: не активный', type: 'status', option: 'inactive' }]


let UsersList: React.FC = React.memo((props) => {
    const { page, limit, fetching, data, total, error, filterOption } = useSelector((state: RootState) => state.users.userList)
    const dispatch = useDispatch()


    const onClickPageChange = React.useCallback((currentPage: number) => {
        dispatch(fetchUsers(currentPage))
    }, [dispatch])


    React.useEffect(() => {
        onClickPageChange(page)
    }, [])

    return (
        <div className={styles.postsStyle}>
            <Title title='Пользователи' />
            <Filter items={filterItems} filterOption={filterOption} />
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            { error ? <div>Что-то пошло не так</div> :
                <div className={styles.postsStyle__content}>
                    {fetching ? <Preloader /> :
                        data.map((user) =>
                            <User user={user} key={user.id} />
                        )
                    }
                </div>
            }
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            <NavLink to='/users/create' className='btn btn--lg' >Создать</NavLink>
        </div>
    )
}
)

export default UsersList