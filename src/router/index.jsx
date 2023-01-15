import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Singup from "../pages/Singup";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic"
import LayoutPrivate from "../layouts/LayoutPrivate"

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LayoutPublic />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "/",
                    element: <Search />,
                },
                {
                    path: "/contact",
                    element: <Contact  />,
                },
                {
                    path: "/login",
                    element: <Login  />,
                },
                {
                    path: "/search",
                    element: <Search  />,
                },
                {
                    path: "/singup",
                    element: <Singup  />,
                },
                {  
                    path: "/profile",
                    element: <LayoutPrivate />,
                    children:[
                        {
                            index: true,
                            element: <Profile />
                        }
                    ]
                } ,
            ]
        },
           
    ]
)
