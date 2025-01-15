import {type PropsWithChildren, useEffect, useState} from "react";
import AuthContext, {type User} from "~/lib/auth-context";
import {useNavigate} from "react-router";
import axios from "~/lib/axios";

const AuthProvider = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    const [user, setAuthUser] = useState<User|null>(null);

    const setUser = (user: User) => {
        localStorage.setItem('auth_user', JSON.stringify(user));
        setAuthUser(user)
    }

    const login = (token: string) => {
        (async () => {
            localStorage.setItem('auth_token', token);
            const user = await axios.get('/user').then(r => r.data);
            setUser(user);

            const url = localStorage.getItem('intended_url') ?? '/';
            localStorage.removeItem('intended_url');
            navigate(url);
        })()
    }

    const logout = () => {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
        setAuthUser(null)
        navigate('/');
    }

    useEffect(() => {
        (async () => {
            let jsonUser = localStorage?.getItem('auth_user');
            let user: User|null = jsonUser ? JSON.parse(jsonUser) : null;
            setAuthUser(user)
        })()
    }, []);

    return (
        <AuthContext.Provider  value={{login, logout, loggedIn: !!user, setUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
