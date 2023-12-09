import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import Root from './assets/components/Root/Root';
import Home from './assets/components/Home/Home';
import Donation from './assets/components/Donation/Donation';
import SingleCard from './assets/components/Home/SingleCard';
import Stats from './assets/components/Statistics/Stat';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader: () => fetch(' /api.json')
    }, {
      path: '/Donation',
      element: <Donation></Donation>
    }
      , {
      path: '/Statistics',
      element: <Stats></Stats>
    }
      , {
      path: '/Home/:id',
      element: <SingleCard></SingleCard>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
