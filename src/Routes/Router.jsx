import { createBrowserRouter } from "react-router-dom";
import Home from "../Componants/Pages/Home/Home";
import Main from "../layout/Main";



const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
export default route;