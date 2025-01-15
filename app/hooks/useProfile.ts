import axios from "~/lib/axios";
import {AxiosError} from "axios";
import React, {type FormEvent, useEffect, useState} from "react";
import useAuth from "~/hooks/useAuth";

export default function useProfile() {
    const {setUser, user} = useAuth();

    const [data, setData] = useState({
        name: user?.name,
        email: user?.email,
        preferred_sources: user?.preferred_sources?.join(',') ?? '',
        preferred_categories: user?.preferred_categories?.join('') ?? ''
    });

    useEffect(() => {
        if (user) {
            setData({
                name: user?.name,
                email: user?.email,
                preferred_sources: user?.preferred_sources?.join(',') ?? '',
                preferred_categories: user?.preferred_categories?.join('') ?? ''
            })
        }
    }, [user]);

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

        const response = await axios.put('/user', ({
            ...data,
            preferred_sources: data.preferred_sources ? data.preferred_sources.split(',') : [],
            preferred_categories: data.preferred_categories ? data.preferred_categories.split(',') : [],
        }))
            .then(response => response)
            .catch(error => error);


        setSubmitting(false);

        if (response.status >= 400) {
            setError(response)
            return;
        }

        setUser(response.data)
        alert('Profile updated')
    }

    return {
        data,
        error,
        submitting,
        handleSubmit,
        handleChange,
    }
}
