import {createContext} from "react";

type AuthProps = { loggedIn: boolean; logout: () => void, login: (token: string) => void }

export const defaultContext = () : AuthProps => {
    return {
        loggedIn: false,
        logout: () => {},
        login: () => {},
    }
}

 const AuthContext = createContext(defaultContext());

export default AuthContext
