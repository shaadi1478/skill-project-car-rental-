import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import CarListing from './Pages/CarListing';
import CarDetails from './Pages/CarDetails';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Login from './From/Login/Login';
import Register from './From/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/cars',
        element: <CarListing></CarListing>
      },
      {
        path: '/cars/:id',
        element: <CarDetails></CarDetails>,
        loader: () => fetch('/carData.json')
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch('/blogData.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
