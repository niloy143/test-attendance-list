import { createBrowserRouter, Navigate } from "react-router-dom";
import AttendanceList from "../components/AttendanceList";
import Login from "../components/Login";
import RegLayout from "../components/RegLayout";
import SignUp1 from "../components/SignUp1";
import SignUp2 from "../components/SignUp2";
import SignUp3 from "../components/SignUp3";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/user/login" />
    },
    {
        path: '/user',
        element: <RegLayout />,
        children: [
            {
                path: '/user',
                element: <Navigate to="/user/login" />
            },
            {
                path: '/user/login',
                element: <Login />
            },
            {
                path: '/user/signup',
                element: <Navigate to="/user/signup/step-1" />
            },
            {
                path: '/user/signup/step-1',
                element: <SignUp1 />
            },
            {
                path: '/user/signup/step-2',
                element: <SignUp2 />
            },
            {
                path: '/user/signup/step-3',
                element: <SignUp3 />
            }
        ]
    },
    {
        path: '/attendance-list',
        element: <AttendanceList />
    },
    {
        path: '*',
        element: <Navigate to="/" />
    }
])

export default routes;