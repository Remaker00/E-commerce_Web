import React from 'react';
import './Order.css';
import Header from '../AboutPage/Header';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Order = () => {

    const [orderItems, setorderItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/getCartItems')
            .then((response) => {
                setorderItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cart items:', error);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="order-container">
                <h2>All Orders</h2>
                {orderItems.map((item) => (
                    <div className="order-item">
                        <img src={item.imageSrc} alt={item.name} />
                        <p className="item-name">{item.name}</p>
                        <p className="item-price"><span>Price: $</span>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Order;
