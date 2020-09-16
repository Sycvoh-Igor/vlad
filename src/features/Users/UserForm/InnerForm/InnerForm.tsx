import React from 'react'
import { FormValues } from '../types';
import { FormikProps } from "formik";
import styles from './InnerForm.module.scss'
import Title from 'components/Title';
import InputField from 'components/Forms/InputField/InputField';
import RadioField from 'components/Forms/RadioField/RadioField';
import Button from 'components/Button';


const InnerForm: React.FC<FormikProps<FormValues>> = (props) => {
    const {
        handleSubmit,
        isSubmitting,
        isValid
    } = props;

    return (
        <div className={styles.root}>
            <Title title='Создание пользователя' />
            <form onSubmit={handleSubmit} className={styles.form}>
                <InputField type='text' name='name' />
                <InputField type='email' name='email' />
                <RadioField type='radio' name='status' value1='active' value2='inactive' />
                <RadioField type='radio' name='gender' value1='male' value2='female' />
                <Button title='Create' disabled={isSubmitting || !isValid} type='submit' />
            </form>
        </div>
    );
};

export default InnerForm