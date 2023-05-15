import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'
import Products from './pages/Products.jsx'
import SingleProduct from './pages/SingleProduct.jsx'






const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }, 
  {
    path: '/About',
    element: <About/>
  },
  {
    path: '/Dashboard',
    element: <Dashboard/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/Products',
    element: <Products/>
  },
  {
    path: '/SingleProduct',
    element: <SingleProduct/>
  },
  {
    path: '*',
    element: <Error/>
  },
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
