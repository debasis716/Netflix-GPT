import React, { useEffect } from 'react';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utility/userSlice';
const Body = () => {

    
    const appRouter = createBrowserRouter(
        [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/browse',
                element: <Browse />
            },
        ]
    )

    
    
    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body
