import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Link.module.scss'
import { PropsType } from './types';
import classNames from 'classnames'

const Link: React.FC<PropsType> = ({ component, link, title, className, large, pagination, onclick }) => {
    return (
        <NavLink to={link} component={component} onClick={onclick} className={classNames(styles.root, className,
            {
                [styles.large]: large,
                [styles.pagination]: pagination,
            })} >
            { title}
        </NavLink >
    )
}

export default Link
