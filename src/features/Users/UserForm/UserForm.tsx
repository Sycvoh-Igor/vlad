import React, { memo } from 'react'
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import Title from 'components/Title';
import styles from './UserForm.module.scss'
import InputField from 'components/Forms/InputField/InputField';
import RadioField from 'components/Forms/RadioField/RadioField';
import { FormValues, PropsType } from './types';
import Button from 'components/Button';




const UserForm: React.FC<PropsType> = memo(({ action, data }) => {

    const submit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const dataForm: FormValues = {
            name: values.name,
            email: values.email,
            status: values.status,
            gender: values.gender
        }
        action(dataForm, data?.id)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{
                email: data ? data.email : '', name: data ? data.name : '',
                gender: data ? data.gender : '', status: data ? data.status : ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Email not valid")
                    .required("Email is required"),
                name: Yup.string().min(3).max(20).required("Name is required"),
                status: Yup.string().required("Status is required"),
                gender: Yup.string().required("Gender is required")
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid, values }) => (
                <div className={styles.root}>
                    <Title title='Создание пользователя' />
                    <Form>
                        <InputField type='text' name='name' title='Имя' value={values.name} />
                        <InputField type='email' name='email' title='Email' value={values.email} />
                        <RadioField type='radio' name='status' value1='Active' value2='Inactive' checked={values.status} />
                        <RadioField type='radio' name='gender' value1='Male' value2='Female' checked={values.gender} />
                        <Button type='submit' title={data ? 'Edit' : 'Create'} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default UserForm

