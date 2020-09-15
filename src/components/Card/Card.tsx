import React from 'react'
import styles from './Card.module.scss'
import { CardProps } from './types';
import { NavLink } from 'react-router-dom';


const Card: React.FC<CardProps> = ({ data, link }) => (
    <ul className={styles.user}>
        {data.map(
            ({ key, label, value }) => (
                <li key={key} className={styles.data__item}>{label}:{value}</li>
            )
        )}
        {link && (
            <li className={styles.data__item}>
                <NavLink className='btn' to={link}>Подробнее</NavLink>
            </li>
        )}

    </ul>
)

export default Card
