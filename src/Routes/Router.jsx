import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Login/Login";
import AddTask from "../Componants/Pages/AddTask";
import CompleteTask from "../Componants/Pages/CompleteTask";
import Home from "../Componants/Pages/Home/Home";
import MyTask from "../Componants/Pages/MyTask";
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
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path:'/complete',
                element: <CompleteTask></CompleteTask>
            }
        ]
    }
])
export default route;