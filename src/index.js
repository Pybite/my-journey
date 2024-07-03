import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.css';
import './App.css';

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import routes from './routes.js';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

