import axios from "~/lib/axios";
import {AxiosError} from "axios";
import React, {type FormEvent, useState} from "react";
import useAuth from "~/hooks/useAuth";

export default function useRegister() {
    const {login} = useAuth();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<AxiosError|null>(null);

    const handleChange = (field: string) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            setData(prevData => ({
                ...prevData,
                [field]: event.target.value
            }))
        }
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        setError(null);

        const response = await axios.post('/register', ({...data, password_confirmation: data.password}))
            .then(response => response)
            .catch(error => error);


        setSubmitting(false);

        if (response.status >= 400) {
            setError(response)
            return;
        }

        const token = response.data?.token;

        console.log(token)

        if (token) {
            login(token)
        }
    }

    return {
        data,
        error,
        submitting,
        handleSubmit,
        handleChange,
    }
}
