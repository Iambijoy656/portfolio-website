import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import BookCartsDetails from "../pages/Projects/ProjectsDetails/BookCartsDetails";
import ElearningDetails from "../pages/Projects/ProjectsDetails/ElearningDetails";
import OneStudioDetails from "../pages/Projects/ProjectsDetails/OneStudioDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/bookscartpage',
                element: <BookCartsDetails></BookCartsDetails>
            },
            {
                path: '/onestudiopage',
                element: <OneStudioDetails></OneStudioDetails>
            },
            {
                path: '/elearningpage',
                element: <ElearningDetails></ElearningDetails>
            },
        ]
    }
])