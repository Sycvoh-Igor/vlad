import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import Title from 'components/Title';
import styles from './UserForm.module.scss'
import InputField from 'components/Forms/InputField/InputField';
import RadioField from 'components/Forms/RadioField/RadioField';


const UserForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            status: '',
            gender: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Email not valid")
                .required("Email is required"),
            name: Yup.string().min(3).max(20).required("Name is required"),
            status: Yup.string().required("Status is required"),
            gender: Yup.string().required("Gender is required")
        }),
        onSubmit: (values) => {
            alert(values);
        },
    });
    return (
        <div className={styles.root}>
            <Title title='Создание пользователя' />
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                {/* <InputField type='text' name='name' /> */}
                {/* <InputField type='email' name='email' /> */}
                {/* <RadioField type='radio' name='status' value1='active' value2='inactive' /> */}
                {/* <RadioField type='radio' name='gender' value1='male' value2='female' /> */}
                <button className='btn btn--lg'
                    type="submit"
                    disabled={!(formik.isSubmitting && formik.isValid)}
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default UserForm

