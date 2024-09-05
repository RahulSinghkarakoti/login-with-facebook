import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Privacy from './pages/Privacy.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'

const routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/privacy',
        element:<Privacy/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
    
  </StrictMode>,
)
