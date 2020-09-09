import React from 'react'
import styles from './User.module.scss'
import { usersType } from '../../../types/types';
import { NavLink } from 'react-router-dom';

type PropsType = {
    user: usersType
}

let User: React.FC<PropsType> = ({ user }) => {
    return (
        <ul className={styles.user}>
            <li className={styles.user__item}>Пользователь id:{user.id}</li>
            <li className={styles.user__item}>Имя:{user.name}</li>
            <li className={styles.user__item}>Email:{user.email}</li>
            <li className={styles.user__item}>Статус:{user.status}</li>
            <li className={styles.user__item}>Пол:{user.gender}</li>
            <li className={styles.user__item}><NavLink className='btn' to={'/users/' + user.id}>Подробнее</NavLink></li>
        </ul>
    )
}

export default User
