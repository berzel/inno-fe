import {createContext} from "react";

export type User = {
    name: string,
    email: string,
    preferred_sources: null|string[],
    preferred_categories: null|string[],
}

export type AuthProps = {
    loggedIn: boolean,
    user?: User|null,
    logout: () => void,
    login: (token: string) => void,
    setUser: (user: User) => void,
}

export const defaultContext = () : AuthProps => {
    return {
        user: null,
        loggedIn: false,
        logout: () => {},
        login: () => {},
        setUser: () => {},
    }
}

 const AuthContext = createContext(defaultContext());

export default AuthContext
