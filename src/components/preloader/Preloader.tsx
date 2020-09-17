import React from 'react';
import styles from './Preloader.module.scss'
const preloader = require('./preloader.gif');

const Preloader: React.FC = () => {
    return <div className={styles.preloader}>
        <img src={preloader} alt="preloader" />
    </div>
}

export default Preloader
