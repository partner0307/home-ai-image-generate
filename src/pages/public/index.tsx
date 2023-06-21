import Footer from "components/layout/footer";
import Main from "components/layout/main";
import Navbar from "components/layout/navbar";
import { Outlet, useLocation } from "react-router-dom";

import HomeImage from 'assets/home.png';
import Background from 'assets/background.png';

const PublicLayout = () => {
    const route = useLocation();
    return (
        <>
            <Navbar />
            <Main background={route.pathname === '/' ? HomeImage : Background}>
                <Outlet />
            </Main>
            <Footer />
        </>
    )
}

export default PublicLayout;
