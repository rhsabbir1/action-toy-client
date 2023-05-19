import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErroePage from "../pages/ErrorPage/ErroePage";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import AddAToys from "../pages/Home/ToysPage/AddAToys";
import MyToys from "../pages/Home/ToysPage/MyToys";
import AllToys from "../pages/Home/ToysPage/AllToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErroePage></ErroePage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: 'blogs',
                element: <Blog></Blog>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path:'addAtoy',
                element:<PrivateRoute><AddAToys></AddAToys></PrivateRoute>
            },
            {
                path:'mytoys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
           
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;