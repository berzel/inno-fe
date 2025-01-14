import Footer from "~/components/footer";
import Header from "~/components/header";
import type {PropsWithChildren} from "react";

export default function AppLayout({children}:PropsWithChildren) {
    return (
        <div className="max-w-7xl mx-auto">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
