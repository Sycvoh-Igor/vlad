import React from 'react'
import { PropsType } from './types'
import { Field, ErrorMessage, FieldAttributes, ErrorMessageProps, FieldProps } from "formik";
import styles from './InputField.module.scss'

const InputField: React.FC<PropsType & FieldAttributes<{}> & ErrorMessageProps> = ({ type, name, value }) => {
    return (
        <div className={styles.root}>
            <label className={styles.label}>Name</label>
            <Field type={type}
                name={name}
                value={value} />
            <ErrorMessage name={name} component='div' className={styles.error} />
        </div>

    )
}

export default InputField
