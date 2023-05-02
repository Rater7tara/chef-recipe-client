import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Professional from "../Pages/Professional/Professional";
import Blog from "../Pages/Blog/Blog";


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
            
        ]
    },
  ])

  export default router;