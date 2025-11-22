import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Categories from "../components/Categories";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import CategoryDetails from "../pages/CategoryDetails";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <HomeLayout></HomeLayout>,
        children : [  
            {
                path : '/category/:id',
                element : <Categories></Categories>,
                loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
            {
                path : '/',
                element : <Navigate to='/category/01'></Navigate>
            }
        ]
    },{
        path : "/auth",
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path : "/auth/login",
                element : <Login></Login>
            },
            {
                path : "/auth/register",
                element : <Register></Register>
            }
        ]
    },{
        path : '/news/:id',
        element : <PrivateRoute>
            <CategoryDetails></CategoryDetails>
        </PrivateRoute>,
        loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    }
    
])