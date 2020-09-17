import React from 'react'
import { PropsType } from './types'
import { Field, ErrorMessage, FieldAttributes, ErrorMessageProps } from "formik";
import styles from './InputField.module.scss'

const InputField: React.FC<PropsType & FieldAttributes<{}> & ErrorMessageProps> = ({ type, value, name, placeholder, title, component }) => {
    return (
        <div className={styles.root}>
            <label className={styles.label}>{title}</label>
            <Field type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                component={component}
                className={styles.input} />
            <ErrorMessage name={name} component='div' className={styles.error} />
        </div>

    )
}

export default InputField
