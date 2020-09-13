import Nav from 'features/Nav'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const logo = require('assets/img/ball.png')

let Header: React.FC = () => {

    return (
        <header className={styles.root}>
            <div className={styles.root__container}>
                <NavLink to='/' className={styles.logo}>
                    <span>LOGO</span>
                    <img src={logo} alt="logo" />
                </NavLink>
                <Nav />
            </div>
        </header>
    )
}

export default Header