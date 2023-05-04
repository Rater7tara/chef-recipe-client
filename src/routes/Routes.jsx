import { Navigate,
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Professional from "../Pages/Professional/Professional";
import Blog from "../Pages/Blog/Blog";
import Chefs from "../Pages/Chefs/Chefs";
import RecipeLayout from "../layout/RecipeLayout";
import Recipes from "../Pages/Recipe/Recipe/Recipes";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import LoginLayout from "../layout/LoginLayout";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate> 
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
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/Professional',
                element: <Professional></Professional>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            },
            {
                path: ':id',
                element: <Recipes></Recipes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: '/chefs/:id',
                element: <Chefs></Chefs>
            }
        ]
    },
    {
        path: 'login',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'register',
        element: <LoginLayout></LoginLayout>,
        children: [
        {
            path: '/register',
            element: <Register></Register>
        }
        ]
    }
  ])

  export default router;