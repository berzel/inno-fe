import {useContext} from "react";
import AuthContext from "~/lib/auth-context";

export default function useAuth() {
    return useContext(AuthContext);
}
