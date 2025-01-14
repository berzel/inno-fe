import {type PropsWithChildren} from "react";
import AuthContext from "~/components/auth-context";
import useAuth from "~/hooks/useAuth";

const AuthProvider = ({ children }: PropsWithChildren) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider  value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
