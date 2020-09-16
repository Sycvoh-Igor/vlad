import React from 'react'
import styles from './Error.module.scss'
import { PropsType } from './types';

const Error: React.FC<PropsType> = ({ error }) => {
    return (
        <div className={styles.root}>{error}</div>
    )
}

export default Error
