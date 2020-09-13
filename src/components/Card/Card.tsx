import React from 'react'
import styles from './Card.module.scss'
import { CardProps } from './types';
// import { NavLink } from 'react-router-dom';


let Card = function <T>({ data, route }: CardProps<T>): any {
    return (
        <ul className={styles.user}>
            {/* <li className={styles.data__item}>Пользователь id:{data}</li>
            <li className={styles.data__item}>Имя:{data.name}</li>
            <li className={styles.data__item}>Email:{data.email}</li>
            <li className={styles.data__item}>Статус:{data.status}</li>
            <li className={styles.data__item}>Пол:{data.gender}</li>
            <li className={styles.data__item}><NavLink className='btn' to={`/${route}/` + data.id}>Подробнее</NavLink></li> */}
        </ul>
    )
}

export default Card
