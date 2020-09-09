import React from 'react'
import Paginator from '../common/paginator/Paginator'
import User from './User/User'
import styles from './Users.module.scss'
import { usersType } from '../../types/types';
import Preloader from '../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';

type PropsType = {
    users: Array<usersType>
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    portionSize: number,
    isFetching: boolean,
    onPageChanged: (pageNumber: number) => void
};

let Users: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.usersStyle}>
            <h1>Пользователи</h1>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} portionSize={props.portionSize} />
            <div className={styles.usersStyle__content}>
                {props.isFetching ? <Preloader /> :
                    props.users.map((u, index) =>
                        <User user={u} key={`${u.id}_${index}`} />
                    )
                }
            </div>
            <NavLink className={styles.create} to='/users/create'>Создать пользователя</NavLink>
        </div>
    )
}

export default Users
