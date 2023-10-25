import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";


    const Router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/servises.json')
            },
            {
              path: "/login",
              element: <Login></Login>
            },
            {
              path: "/singUp",
              element: <SingUp></SingUp>
            }
          ]
        },
      ]);


export default Router;