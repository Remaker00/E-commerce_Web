import React  from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ParentComponent from './Components/ParentComponent';
import About from './Components/AboutPage/AboutPage';


const router = createBrowserRouter([
  { path: '/', element: <ParentComponent /> },
  { path: '/about', element: <About /> }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
