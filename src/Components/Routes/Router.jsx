import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import CheckOut from "../Pages/CheakOut/CheckOut";


    const Router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
              path: "/login",
              element: <Login></Login>
            },
            {
              path: "/singUp",
              element: <SingUp></SingUp>
            },
            {
              path: "/service/:id",
              element:<CheckOut></CheckOut>,
              loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
              
            }
          ]
        },
      ]);


export default Router;