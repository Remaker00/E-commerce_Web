import React  from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ParentComponent from './Components/ParentComponent';
import About from './Components/AboutPage/AboutPage';
import ContactUs from './Components/ContactUs/ContactUs';
import Order from './Components/YourOrder/Order';
import ProductReview from './Components/Productreview/ProductReview';
import AuthForm from './Components/Pages/AuthForm';
import Password from './Components/Pages/Password';


const router = createBrowserRouter([
  { path: '/', element: <AuthForm /> },
  { path: '/about', element: <About /> },
  { path: '/contactus', element: <ContactUs /> },
  {path: '/yourOrders', element: <Order />},
  {path: '/ProductReview/:itemId', element: <ProductReview />},
  {path: '/productform', element: <ParentComponent />},
  {path: '/forgetpassword', element: <Password />}
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
