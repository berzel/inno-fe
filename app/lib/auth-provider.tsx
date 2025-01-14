import {type PropsWithChildren, useEffect, useState} from "react";
import AuthContext, {defaultContext} from "~/lib/auth-context";
import {useNavigate} from "react-router";

const AuthProvider = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    let [authState, setAuthState] = useState(defaultContext());

    const login = (token: string) => {
        console.log('Logging in...')
        localStorage.setItem('auth_token', token);
        setAuthState(p => ({...p, loggedIn: true}));
        navigate('/');
    }

    const logout = () => {
        console.log("Logging out...")
        localStorage.removeItem('auth_token')
        setAuthState(p => ({...p, loggedIn: false}));
        navigate('/');
    }

    useEffect(() => {
        const token = localStorage?.getItem('auth_token');

        console.log('Setting stuff', {
            loggedIn: !!token,
            login, logout
        })

        setAuthState({
            loggedIn: !!token,
            login, logout
        })
    }, []);

    return (
        <AuthContext.Provider  value={authState}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
