import React from 'react'
import styles from './Card.module.scss'
import { CardProps } from './types';
import { NavLink } from 'react-router-dom';


const Card: React.FC<CardProps> = ({ data, link }) => (
    <ul className={styles.root}>
        {data.map(
            ({ key, label, value }) => (
                <li key={key} className={styles.item}>{label}: {value}</li>
            )
        )}
        {link && (
            <li className={styles.lastItem}>
                <NavLink className='btn' to={link}>Подробнее</NavLink>
            </li>
        )}

    </ul>
)

export default Card
