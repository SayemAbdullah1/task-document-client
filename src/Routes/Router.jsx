import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Login/Login";
import AddTask from "../Componants/Pages/AddTask";
import CompleteTask from "../Componants/Pages/CompleteTask";
import Home from "../Componants/Pages/Home/Home";
import MyTask from "../Componants/Pages/MyTask";
import Register from "../Componants/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";



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
            },
            {
                path: '/addtask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/mytask',
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path:'/complete',
                element: <PrivateRoute><CompleteTask></CompleteTask></PrivateRoute>
            }
        ]
    }
])
export default route;