import React from 'react'
import { PropsType } from './types'
import { Field, ErrorMessage } from "formik";
import styles from './RadioField.module.scss'

const RadioField: React.FC<PropsType> = ({ type, name, value1, value2 }) => {
    return (
        <div className={styles.root}>
            <div id="my-radio-group">Status</div>
            <div role="group" aria-labelledby="my-radio-group">
                <label>
                    <Field type={type}
                        name={name}
                        value={value1} />
                    {value1}
                </label>
                <label>
                    <Field type={type}
                        name={name}
                        value={value2} />
                    {value2}
                </label>
                <ErrorMessage name={name} component='div' className={styles.error} />
            </div>
        </div >
    )
}

export default RadioField
