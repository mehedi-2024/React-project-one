import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ProductDetails from './Product-Details/ProductDetails.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('data.json'),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
