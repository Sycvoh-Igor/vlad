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
                        type="text"
                        name="name"
                    />
                    <ErrorMessage name="name" component='div' className={styles.error} />
                </div>
                <div className={styles.form__item}>
                    <label className={styles.label}>Email</label>
                    <Field
                        className={styles.input}
                        type="email"
                        name="email"
                    />
                    <ErrorMessage name="email" component='div' className={styles.error} />
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
                        <ErrorMessage name="status" component='div' className={styles.error} />
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
                        <ErrorMessage name="status" component='div' className={styles.error} />
                    </div>
                </div>
                <button className='btn btn--lg'
                    type="submit"
                    disabled={
                        isSubmitting || !isValid
                    }
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default InnerForm