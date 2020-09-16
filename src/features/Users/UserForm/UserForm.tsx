import React, { memo, useEffect } from 'react'
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import Title from 'components/Title';
import styles from './UserForm.module.scss'
import InputField from 'components/Forms/InputField/InputField';
import RadioField from 'components/Forms/RadioField/RadioField';
import { FormValues } from './types';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, cleanCreatedUserId } from '../UserList/actions';
import { RootState } from 'app/store';
import { useHistory } from 'react-router-dom';



const UserForm: React.FC = memo(() => {
    const { createdUserId } = useSelector((state: RootState) => state.users.userList)
    const dispatch = useDispatch()
    const history = useHistory()
    const submit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const data: FormValues = {
            name: values.name,
            email: values.email,
            status: values.status,
            gender: values.gender
        }
        dispatch(createUser(data))
        setSubmitting(false)
    }

    useEffect(() => {
        if (createdUserId !== null) {
            history.push(`/users/${createdUserId}`)
            dispatch(cleanCreatedUserId())
        }
    }, [createdUserId])

    return <div>
        <Formik
            initialValues={{ email: '', name: '', gender: '', status: '' }}
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
            {({ isSubmitting, isValid }) => (
                <div className={styles.root}>
                    <Title title='Создание пользователя' />
                    <Form>
                        <InputField type='text' name='name' title='Имя' />
                        <InputField type='email' name='email' title='Email' />
                        <RadioField type='radio' name='status' value1='Active' value2='Inactive' />
                        <RadioField type='radio' name='gender' value1='Male' value2='Female' />
                        <Button type='submit' title='Create' disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default UserForm

