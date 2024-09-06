import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import '../src/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.js';
import { Provider } from 'react-redux'


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
      
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <RouterProvider router={routes} />
    </PersistGate>
    </Provider>
  </StrictMode>,
)
