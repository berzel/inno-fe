import axios from "~/lib/axios";
import {AxiosError} from "axios";
import React, {type FormEvent, useContext, useState} from "react";
import {useNavigate} from "react-router";
import AuthContext from "~/lib/auth-context";
import useAuth from "~/hooks/useAuth";

export default function useLogin() {
    const {login} = useAuth();

    const [data, setData] = useState({
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

        const response = await axios.post('/login', data)
            .then(response => response)
            .catch(error => error);

        setSubmitting(false);

        if (response.status >= 400) {
            setError(response)
            return;
        }

        const token = response.data?.token;

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
