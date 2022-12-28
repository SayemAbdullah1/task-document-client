import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Login/Login";
import Home from "../Componants/Pages/Home/Home";
import Register from "../Componants/Register/Register";
import Main from "../layout/Main";



const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            }
        ]
    }
])
export default route;