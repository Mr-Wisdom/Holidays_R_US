import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Christmas from './components/Christmas';
import Thanksgiving from './components/Thanksgiving';
import Halloween from './components/Halloween';
import Homepg from './components/Homepg';


const routes = [{
  path: '/',
  element : <App />,
  children: [
     { index : true, element : <Homepg />},
     {
      path : '/Christmas',
      element : <Christmas />,
     },
     {
      path : '/Thanksgiving',
      element : <Thanksgiving />
     },
     {
      path : '/Halloween',
      element : <Halloween />
     },
  ]
 },
];

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
