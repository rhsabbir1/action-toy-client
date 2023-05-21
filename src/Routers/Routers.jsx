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
import ToyUpdate from "../pages/Home/ToysPage/ToyUpdate";
import Details from "../pages/Details/Details";

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
                path:'details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params}) => fetch(`https://action-figure-toys-server.vercel.app/update/${params.id}`)
            },
           
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
            ,{
                path:'update/:id',
                element:<ToyUpdate></ToyUpdate>,
                loader:({params}) => fetch(`https://action-figure-toys-server.vercel.app/update/${params.id}`)
            }
        ]
    }
])

export default router;