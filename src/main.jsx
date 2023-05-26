import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './Components/ErrorElement/ErrorElement';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import JobProductsData from './Loader/JobsLoader';
import JobDetails from './Components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    loader: JobProductsData,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      
      },
      {
        path: '/Features/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch('/jobData.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/application',
        element: <AppliedJobs></AppliedJobs>,
        // loader: () => fetch('/jobData.json')
        loader: JobProductsData
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ]
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
