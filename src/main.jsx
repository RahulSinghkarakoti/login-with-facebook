import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import '../src/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'

const routes=createBrowserRouter([
  {
    path:'/',
    element:<Login/>,
  },
  {
    path:'/home',
    element:<App/>,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
