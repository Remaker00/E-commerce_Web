import React from 'react'
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/*
import ParentComponent from './Components/ParentComponent';
import About from './Components/AboutPage/AboutPage';
import ContactUs from './Components/ContactUs/ContactUs';
import Order from './Components/YourOrder/Order';
import ProductReview from './Components/Productreview/ProductReview';
import Password from './Components/Pages/Password';
import LoginForm from './Components/Pages/LoginForm';
import SignupForm from './Components/Pages/SignupFrom';
*/
import Navigation from './components1/Navigation';
import './App.css';


//const router = createBrowserRouter([
//{ path: '/', element: <SignupForm /> },
//{ path: '/login-form', element: <LoginForm /> },
//{ path: '/about', element: <About /> },
//{ path: '/contactus', element: <ContactUs /> },
//{path: '/yourOrders', element: <Order />},
//{path: '/ProductReview/:itemId', element: <ProductReview />},
//{path: '/productform', element: <ParentComponent />},
//{path: '/forgetpassword', element: <Password />}
//]);

const App1 = () => {
    return (
        <Navigation />
    )
}

export default App1
