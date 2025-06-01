import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";

function Layout() {
    const location = useLocation();
    return (
        <>
            <Header />
            <main>
                <Suspense key={location.pathname}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
