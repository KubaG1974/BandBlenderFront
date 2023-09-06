import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router/router';
import {RouterProvider} from 'react-router-dom';
import './reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
