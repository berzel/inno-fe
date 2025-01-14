import Footer from "~/components/footer";
import Header from "~/components/header";
import type {PropsWithChildren} from "react";
import AuthLayout from "~/layouts/AuthLayout";

export default function AppLayout({children}:PropsWithChildren) {
    return (
        <AuthLayout>
            <div className="max-w-7xl mx-auto">
                <Header/>
                {children}
                <Footer/>
            </div>
        </AuthLayout>
    )
}
