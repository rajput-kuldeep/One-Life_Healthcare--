import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AboutUs from './Components/AboutUs.tsx'
import ContactUs from './Components/ContactUs.tsx'
import Blog from './Components/Blog.tsx'
import SOS from './Components/SOS.tsx'
import Spaces from './Components/Spaces.tsx'
import Home from './page/Home.tsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    children : [
      {
        path : "/",
        element : <Home />
      },

    {
      path : "/about",
      element : <AboutUs />
    },

    {
      path : "contact-us",
      element : <ContactUs />
    },
    {
      path : "blog",
      element : <Blog />
    },
    {
      path : "sos",
      element : <SOS />
    },
    {
      path : "spaces",
      element : <Spaces />
    },
   
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
