import _ROUTERS from "constants/routers.constant";
import PublicLayout from "pages/public";
import MultiFormPage from "pages/public/multiform";
import OverviewPage from "pages/public/overview";
import PricingPage from "pages/public/pricing";
import Conditions from 'pages/public/conditions';
import Signup from 'pages/public/signup';
import { createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: _ROUTERS.home,
                element: <OverviewPage />
            },
            {
                path: _ROUTERS.howwework,
                element: <MultiFormPage />
            },
            {
                path: _ROUTERS.pricing,
                element: <PricingPage />
            },
            {
                path: _ROUTERS.logout,
                element: <OverviewPage />
            },
            {
                path: _ROUTERS.signup,
                element: <Signup />
            },
            {
                path: _ROUTERS.conditions,
                element: <Conditions />
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;
