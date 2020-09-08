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
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.status}</li>
            <li>{user.gender}</li>
            <li><NavLink to={'/users/:' + user.id}>Подробнее</NavLink></li>
        </ul>
    )
}

export default User
