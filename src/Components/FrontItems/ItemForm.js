// Item.js
import React from 'react';
import classes from './Item.module.css';

const Item = ({ imageSrc, description, price, onAddToCart }) => {

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the form submission and page refresh
    onAddToCart();
  };

  return (
    <div className={classes["item"]}>
      <img src={imageSrc} alt={description} />
      <p className={classes["description"]}>{description}</p>
      <p className={classes["price"]}>{price}</p>
      <form>
        <button onClick={handleClick}>Buy</button>
      </form>
    </div>
  );
};

export default Item;
