import {type PropsWithChildren, useEffect, useState} from "react";
import AuthContext, {defaultContext, type User} from "~/lib/auth-context";
import {useNavigate} from "react-router";
import axios from "~/lib/axios";

const AuthProvider = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    let [authState, setAuthState] = useState(defaultContext());

    const login = (token: string) => {
        (async () => {
            localStorage.setItem('auth_token', token);
            const user = await axios.get('/user').then(r => r.data)
            setAuthState(p => ({...p, loggedIn: true, user}));

            const url = localStorage.getItem('intended_url') ?? '/';
            localStorage.removeItem('intended_url');
            navigate(url);
        })()
    }

    const logout = () => {
        console.log("Logging out...")
        localStorage.removeItem('auth_token')
        setAuthState(p => ({...p, loggedIn: false, user: null}));
        navigate('/');
    }

    const setUser = (user: User) => {
        setAuthState(p => ({...p, user}))
    }

    useEffect(() => {
        (async () => {
            let user = null;
            const token = localStorage?.getItem('auth_token');

            if (token) {
                user = await axios.get('/user').then(r => r.data)
            }

            setAuthState({
                loggedIn: !!token,
                login, logout, user, setUser
            })
        })()
    }, []);

    return (
        <AuthContext.Provider  value={authState}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
