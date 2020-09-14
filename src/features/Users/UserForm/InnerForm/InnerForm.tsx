import React from 'react'
import { OtherProps, FormValues } from '../types';
import { Field, FormikProps } from "formik";
import styles from './InnerForm.module.scss'
import Title from 'components/Title';


const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        error={errors.name}
                    />
                    {errors.name && <div className={styles.error}>{errors.name}</div>}
                </div>
                <div className={styles.form__item}>
                    <label className={styles.label}>Email</label>
                    <Field
                        className={styles.input}
                        width={50}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email}
                    />
                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                </div>
                <div className={styles.form__item}>
                    <div id="my-radio-group">Status</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio"
                                name="status"
                                value="active"
                                error={errors.status} />
                         Male
                        </label>
                        <label>
                            <Field type="radio"
                                name="status"
                                value="inactive"
                                error={errors.status} />
                        Female
                        </label>
                        {errors.status && <div className={styles.error}>{errors.status}</div>}
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div id="my-radio-group">Gender</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio"
                                name="gender"
                                value="male"
                                error={errors.gender} />
                         Male
                        </label>
                        <label>
                            <Field type="radio"
                                name="gender"
                                value="female"
                                error={errors.gender}
                            />
                        Female
                        </label>
                        {errors.gender && <div className={styles.error}>{errors.gender}</div>}
                    </div>
                </div>
                <button className='btn btn--lg'
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !!(errors.email && touched.email) ||
                        !!(errors.name && touched.name) ||
                        !!(errors.status && touched.status) ||
                        !!(errors.gender && touched.gender)
                    }
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default InnerForm