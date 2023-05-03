import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Professional from "../Pages/Professional/Professional";
import Blog from "../Pages/Blog/Blog";
import Chefs from "../Pages/Chefs/Chefs";
import RecipeLayout from "../layout/RecipeLayout";
import Recipes from "../Pages/Recipe/Recipe/Recipes";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
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
                path: '/chefs/:id',
                element: <Chefs></Chefs>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    },
    {
        path:'recipe',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <Recipes></Recipes>

            }
        ]
    }
  ])

  export default router;