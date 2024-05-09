import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErorPage from './Components/ErorPage';
import Home from './Components/Home';
import Shop from './Page/Shop';
import Contact from './Page/Contact';
import ShopCard from './Components/ShopCard';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Shop",
        element:<Shop/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/ShopCard",
        element:<ShopCard/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

