import React from 'react';
import classes from './Item.module.css';

const Item = ({ imageSrc, description, price }) => {
  return (
    <div className={classes["item"]}>
      <img src={imageSrc} alt="Product" />
      <p className={classes["description"]}>{description}</p>
      <p className={classes["price"]}>{price}</p>
    </div>
  );
};

export default Item;
