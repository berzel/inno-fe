import type {PropsWithChildren} from "react";
import AuthProvider from "~/components/auth-provider";

export default function AuthLayout({children}:PropsWithChildren) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
