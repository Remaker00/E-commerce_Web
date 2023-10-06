import React from 'react';
import classes from './CartItems.module.css';

const CartItm = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {
    return (
        <div className={classes['cart-container']}>
            <h2>Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className={classes['cart-items']}>
                    {cartItems.map((item) => (
                        <tr key={item.id} className={classes['cart-item']}>
                            <td>
                                <div className={classes['item-details']}>
                                    <img
                                        src={item.imageSrc}
                                        alt={item.description}
                                        className={classes['item-image']}
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={classes['item-price']}>{item.price}</span>
                            </td>
                            <td>
                                <div className={classes['quantity-control']}>
                                    <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
                                    <span className={classes['item-quantity']}>{item.quantity}</span>
                                    <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                                </div>
                            </td>
                            <td>
                                <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className={classes["purchase-button"]} type="button">PURCHASE</button>
        </div>
    );
};

export default CartItm;
