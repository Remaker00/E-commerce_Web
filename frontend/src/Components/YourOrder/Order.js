import { useEffect, useState } from 'react';
import './Order.css';
import Header from '../AboutPage/Header';
import axios from 'axios';

const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // If token exists, fetch and set order items
      axios.get('https://e-commerce-web-tau-lyart.vercel.app/api/getCartItems', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        setOrderItems(response.data);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="order-container">
        {isAuthenticated ? (
          <>
            <h2>All Orders</h2>
            {orderItems.map((item) => (
              <div key={item._id} className="order-item">
                <img src={item.imageSrc} alt={item.name} />
                <p className="item-name">{item.name}</p>
                <p className="item-price"><span>Price: $</span>{item.price}</p>
              </div>
            ))}
          </>
        ) : (
          <div className="login-signup-message">
            <p>Please sign up or log in to view your orders.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
