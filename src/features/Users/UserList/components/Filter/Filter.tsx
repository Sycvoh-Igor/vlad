import Button from 'components/Button'
import InputField from 'components/Forms/InputField/InputField'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { FilterOption, filterType, PropsType } from './types'
import styles from './Filter.module.scss'

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}



const FilterForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {

    const submit = (values: filterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterOption = {
            name: values.name,
            gender: values.gender,
            status: values.status
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{ name: '', gender: '', status: '' }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <InputField type='text' name='name' title='Имя' />
                    <Field name="gender" as="select">
                        <option className={styles.option} value="">All</option>
                        <option className={styles.option} value="male">Only male</option>
                        <option className={styles.option} value="female">Only female</option>
                    </Field>
                    <Field name="status" as="select">
                        <option className={styles.option} value="">All</option>
                        <option className={styles.option} value="active">Only active</option>
                        <option className={styles.option} value="inacrtive">Only inactive</option>
                    </Field>
                    <Button type='submit' title='Find' disabled={isSubmitting} />
                </Form>
            )}
        </Formik>
    </div>
})

export default FilterForm
