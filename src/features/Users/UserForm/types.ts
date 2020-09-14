export interface OtherProps {
    title?: string;
}

export interface MyFormProps {
    initialName?: string;
    initialEmail?: string;
    initialStatus?: string;
    initialGender?: string;
}

export interface FormValues {
    name: string;
    email: string;
    status: string;
    gender: string;
}