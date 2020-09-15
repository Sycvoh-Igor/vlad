import React from 'react'
import styles from './Error.module.scss'
import { PropsType } from './types';

const Error: React.FC<PropsType> = ({ error }) => {
    return (
        <h1 className={styles.root}>{error}</h1>
    )
}

export default Error
