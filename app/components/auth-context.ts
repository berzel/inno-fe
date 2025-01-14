import {createContext} from "react";

export const defaultContext = () : { loggedIn: boolean; logout: () => void } => {
    return {
        loggedIn: false,
        logout: () => {}
    }
}

 const AuthContext = createContext(defaultContext());

export default AuthContext
