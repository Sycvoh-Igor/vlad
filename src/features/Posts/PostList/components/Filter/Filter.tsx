import Button from 'components/Button'
import InputField from 'components/Forms/InputField/InputField'
import { Form, Formik } from 'formik'
import React from 'react'
import { FilterType, PropsType } from './types'

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}



const FilterForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {

    const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            userId: values.userId,
            title: values.title,
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{ userId: null, title: '' }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <InputField type='text' name='userId' title='UserId' />
                    <InputField type='text' name='title' title='Название' />
                    <Button type='submit' title='Find' disabled={isSubmitting} />
                </Form>
            )}
        </Formik>
    </div>
})

export default FilterForm
