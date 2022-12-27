import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Singup from "../pages/Singup";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />,
    },
    {
        path: "/profile",
        element: <Profile />,
        errorElement: <NotFound />,
    },
    {
        path: "/search",
        element: <Search  />,
        errorElement: <NotFound />,
    },
    {
        path: "/singup",
        element: <Singup  />,
        errorElement: <NotFound />,
    },
]);
