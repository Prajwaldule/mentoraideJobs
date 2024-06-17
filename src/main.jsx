import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SharedDataProvider } from './data/sharedDataContext.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Page1 from './pages/page1.jsx'
import Page2 from './pages/page2.jsx'
import Page3 from './pages/page3.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Page1/>
  },
  {
    path:'/jobs',
    element: <Page2/>
  },
  {
    path:'/jobs/:id',
    element: <Page3/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedDataProvider>
    <RouterProvider router={router} />
    </SharedDataProvider>
  </React.StrictMode>,
)
