// ParentComponent.js
import React, { useState } from 'react';
import Header from './Header';
import Items from './FrontItems/Items';
import CarouselEffect from './CarouselEffect/CarouselEffect';
import CartItm from './Cart/CartItm';
import './BackDrop.css'; // Import the CSS for the backdrop

const ParentComponent = () => {
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartItems, setCartItems] = useState([]); // State for storing cart items
    const [isCartVisible, setIsCartVisible] = useState(false);

    const addToCartHandler = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        setCartItemCount((prevCount) => prevCount + 1);
    };

    const handleCartButtonClick = () => {
        setIsCartVisible((prevValue) => !prevValue); // Toggle cart visibility
    };

    return (
        <div>
            <Header cartItemCount={cartItemCount} onButtonClick={handleCartButtonClick} />
            <CarouselEffect />
            <Items onAddToCart={addToCartHandler} />
            {isCartVisible && (
                <div className="cart-container">
                    <CartItm
                        cartItems={cartItems}
                        onCartClose={handleCartButtonClick} // Close the cart when the backdrop is clicked
                    />
                </div>
            )}
            {isCartVisible && <div className="backdrop" onClick={handleCartButtonClick}></div>}
        </div>
    );
};

export default ParentComponent;
