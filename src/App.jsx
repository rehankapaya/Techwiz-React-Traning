import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import DesignsPages from './pages/DesignsPages'
import DesignersPages from './pages/DesignersPages'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FeedbackPage from './pages/FeedbackPage'
import './App.css'
export default function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:'/designs',
      element:<DesignsPages/>
    },
    {
      path:'/designers',
      element:<DesignersPages/>
    },
    {
      path:'/products',
      element:<ProductPage/>
    },
    {
      path:'/about',
      element:<AboutPage/>
    },
    {
      path:'/contact',
      element:<ContactPage/>
    },
    {
      path:'/feedback',
      element:<FeedbackPage/>
    },
    {
      path:"*",
      element:<ErrorPage/>
    }

  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
