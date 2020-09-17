import React, { memo, useEffect } from 'react'
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import Title from 'components/Title';
import styles from './PostForm.module.scss'
import InputField from 'components/Forms/InputField/InputField';
import { FormValues } from './types';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, cleanCreatedPostId } from '../PostList/actions';
import { RootState } from 'app/store';
import { useHistory } from 'react-router-dom';



const PostForm: React.FC = memo(() => {
    const { createdPostId } = useSelector((state: RootState) => state.posts.postList)
    const dispatch = useDispatch()
    const history = useHistory()
    const submit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const data: FormValues = {
            user_id: values.user_id,
            title: values.title,
            body: values.body,
        }
        dispatch(createPost(data))
        setSubmitting(false)
    }

    useEffect(() => {
        if (createdPostId !== null) {
            history.push(`/posts/${createdPostId}`)
            dispatch(cleanCreatedPostId())
        }
    }, [createdPostId])

    return <div>
        <Formik
            initialValues={{ user_id: null, title: '', body: '' }}
            validationSchema={Yup.object().shape({
                user_id: Yup.string().min(1).required("User_id is required"),
                title: Yup.string().min(3).max(20).required("Title is required"),
                body: Yup.string().min(20).max(240).required("Body is required"),
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <div className={styles.root}>
                    <Title title='Создание статьи' />
                    <Form>
                        <InputField type='text' name='user_id' title='user_id' />
                        <InputField type='text' name='title' title='Название' />
                        <InputField type='text' name='body' component='textarea' title='Содержание' />
                        <Button type='submit' title='Create' disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default PostForm

