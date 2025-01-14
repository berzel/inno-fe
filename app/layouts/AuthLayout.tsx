import type {PropsWithChildren} from "react";
import AuthProvider from "~/lib/auth-provider";

export default function AuthLayout({children}:PropsWithChildren) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
