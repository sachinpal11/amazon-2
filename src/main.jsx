import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import UserCart from './Components/UserCart.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Home /> },
      { path: "/UserCart", element: <UserCart /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
