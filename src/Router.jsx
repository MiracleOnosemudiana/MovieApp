import React from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    // RouterProvider,
} from "react-router-dom";
import Home from './Home';
import MoviePage from './MoviePage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "movie/:id",
        element: <MoviePage />,
    }
]);

export default Router;
