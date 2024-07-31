import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './MainPage';
import {
  createBrowserRouter,
  RouterProvider,
  OutLet
} from "react-router-dom";
import UserPage from './UserPage';


import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import store from './redux';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  {
    path: "/user",
    element: <UserPage></UserPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
    
  </React.StrictMode>
);

