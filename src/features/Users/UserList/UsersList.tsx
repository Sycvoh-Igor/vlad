import React, { memo } from 'react'
import Preloader from 'components/preloader/Preloader';
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import Paginator from 'components/paginator';
import { fetchUsers } from './actions';
import Title from 'components/Title';
import Filter from 'components/Filter';
import { filterType } from './types';
import styles from './UsersList.module.scss'
import { NavLink, useHistory } from 'react-router-dom';
import User from './components/User';



const filterItems: Array<filterType> = [
    { name: 'Имя пользователя', type: 'name' },
    { name: 'Мужчина', type: 'gender', option: 'male' },
    { name: 'Женщина', type: 'gender', option: 'female' },
    { name: 'Статус пользователя: активный', type: 'status', option: 'active' },
    { name: 'Статус пользователя: не активный', type: 'status', option: 'inactive' }]


let UsersList: React.FC = memo(() => {
    const { page, limit, fetching, data, total, error, filterOption } = useSelector((state: RootState) => state.users.userList)
    const dispatch = useDispatch()
    const history = useHistory()

    const onClickPageChange = React.useCallback((currentPage: number) => {
        dispatch(fetchUsers(currentPage))
        history.push({
            pathname: '/users',
            search: `page=${currentPage}`
        })

    }, [dispatch])


    React.useEffect(() => {
        onClickPageChange(page)
    }, [])

    return (
        <div className={styles.root}>
            <Title title='Пользователи' />
            <Filter items={filterItems} filterOption={filterOption} />
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            { error ? <div>Что-то пошло не так</div> :
                <div className={styles.content}>
                    {fetching ? <Preloader /> :
                        data.map((user) =>
                            <div className={styles.item} key={user.id}>
                                <User user={user} />
                            </div>
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