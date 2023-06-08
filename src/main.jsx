import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';
import EditProfile from './Pages/EditProfile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/editprofile',
    element: <EditProfile />,
  },
])
const Container = document.getElementById('root');
const root = ReactDOM.createRoot(Container);
root.render(
  <RouterProvider router={router} />
)
