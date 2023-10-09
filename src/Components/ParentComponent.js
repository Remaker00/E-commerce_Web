import React, { useState, useEffect } from 'react';
import Header from './Header';
import Items from './FrontItems/Items';
import CarouselEffect from './CarouselEffect/CarouselEffect';
import CartItm from './Cart/CartItm';
import './BackDrop.css'; // Import the CSS for the backdrop

const ParentComponent = () => {
    const [cartItemCount, setCartItemCount] = useState(() => {
        const storedCartItemCount = parseInt(localStorage.getItem('cartItemCount')) || 0;
        return storedCartItemCount;
    });
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return storedCartItems;
    });
    const [isCartVisible, setIsCartVisible] = useState(false);


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartItemCount', cartItemCount.toString());
    }, [cartItems, cartItemCount]);

    const addToCartHandler = (item) => {
        const newItem = { ...item, quantity: 1 };
        setCartItems((prevItems) => [...prevItems, newItem]);
        setCartItemCount((prevCount) => prevCount + 1);
    };

    const handleCartButtonClick = () => {
        setIsCartVisible((prevValue) => !prevValue); // Toggle cart visibility
    };

    const onRemoveItem = (id) => {
        const updateCartItems = cartItems.filter((item) => item.id !== id);

        setCartItems(updateCartItems);

        setCartItemCount((prevCount) => prevCount - 1);
    }

    const handledecrease = (id) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );

        const updatedCartItemCount = updatedCartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

        setCartItems(updatedCartItems);
        setCartItemCount(updatedCartItemCount);
    };

    const handleincrease = (id) => {
        const updatedCartItems = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
    
        const updatedCartItemCount = updatedCartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
    
        setCartItems(updatedCartItems);
        setCartItemCount(updatedCartItemCount);
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
                        onCartClose={handleCartButtonClick}
                        onDecreaseQuantity={handledecrease}
                        onIncreaseQuantity={handleincrease}
                        onRemoveItem={onRemoveItem}
                    />
                </div>
            )}
            {isCartVisible && <div className="backdrop" onClick={handleCartButtonClick}></div>}
        </div>
    );
};

export default ParentComponent;
