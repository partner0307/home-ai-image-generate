import Footer from "components/layout/footer";
import Main from "components/layout/main";
import Navbar from "components/layout/navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    )
}

export default PublicLayout;
