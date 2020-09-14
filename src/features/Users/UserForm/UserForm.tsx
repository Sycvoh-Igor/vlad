import { withFormik } from 'formik';
import { FormValues, MyFormProps } from './types';
import * as Yup from "yup";
import InnerForm from './InnerForm/InnerForm';
// import styles from './UserForm.module.scss'


const UserForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        name: props.initialName || "",
        email: props.initialEmail || "",
        status: props.initialStatus || "",
        gender: props.initialGender || "",
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        name: Yup.string().min(3).max(20).required("Name is required"),
        status: Yup.string().required("Status is required"),
        gender: Yup.string().required("Gender is required")
    }),

    handleSubmit(
        { name, email, status, gender }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log(name, email, status, gender);
    }
})(InnerForm);

export default UserForm
