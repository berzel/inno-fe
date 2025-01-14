import {useEffect, useState} from "react";

export default function useAuth() {
    let [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage?.getItem('auth_token');
        if (token) setLoggedIn(true)
    }, []);

    return {
        loggedIn
    }
}
