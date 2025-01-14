import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

export default function useAuth() {
    const navigate = useNavigate();
    let [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage?.getItem('auth_token');
        if (token) setLoggedIn(true)
    }, []);

    const logout = () => {
        localStorage.removeItem('auth_token')
        setLoggedIn(false);
        navigate('/');
    }

    return {
        logout,
        loggedIn
    }
}
