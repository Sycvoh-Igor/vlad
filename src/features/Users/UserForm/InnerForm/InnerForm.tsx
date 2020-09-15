import React from 'react'
import { FormValues } from '../types';
import { Field, FormikProps, ErrorMessage } from "formik";
import styles from './InnerForm.module.scss'
import Title from 'components/Title';


const InnerForm: React.FC<FormikProps<FormValues>> = (props) => {
    const {
        values,
        handleSubmit,
        isSubmitting,
        isValid
    } = props;

    return (
        <div className={styles.root}>
            <Title title='Создание пользователя' />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.form__item}>
                    <label className={styles.label}>Name</label>
                    <Field
                        className={styles.input}
                        width={50}
                        type="text"
                        name="name"
                        value={values.name}
                    />
                    <ErrorMessage name="name" />
                </div>
                <div className={styles.form__item}>
                    <label className={styles.label}>Email</label>
                    <Field
                        className={styles.input}
                        width={50}
                        type="email"
                        name="email"
                    />
                    <ErrorMessage name="email" />
                </div>
                <div className={styles.form__item}>
                    <div id="my-radio-group">Status</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio"
                                name="status"
                                value="active"
                            />
                         Male
                        </label>
                        <label>
                            <Field type="radio"
                                name="status"
                                value="inactive" />
                        Female
                        </label>
                        <ErrorMessage name="status" />
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div id="my-radio-group">Gender</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio"
                                name="gender"
                                value="male" />
                         Male
                        </label>
                        <label>
                            <Field type="radio"
                                name="gender"
                                value="female"
                            />
                        Female
                        </label>
                        <ErrorMessage name="status" />
                    </div>
                </div>
                <button className='btn btn--lg'
                    type="submit"
                    disabled={
                        isSubmitting || isValid
                    }
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default InnerForm