import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './assets/components/Shop/Shop.jsx';
import Home from './assets/components/Layout/Home.jsx';
import Orders from './assets/components/Orders/Orders.jsx';
import Inventory from './assets/components/Inventroy/Inventory.jsx';
import Login from './assets/components/Login/Login.jsx';
import cartProductsLoader from './Loaders/cartProductsLoader.js';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children: [
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
        
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'login',
        element: <Login></Login>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
