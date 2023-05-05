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
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ErrorPage from "../layout/ErrorPage";
import RecipeDetails from "../Pages/Recipe/RecipeDetails/RecipeDetails";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><Professional></Professional></PrivateRoute>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-server-rouge-six.vercel.app/chefs/${params.id}`)
            },
            
        ]
    }
  ])

  export default router;