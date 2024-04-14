import React from 'react';

const ItemForm = ({ imageSrc, name, description, price, onAddToCart }) => {

  const handleClick = (event) => {
    event.preventDefault();
    onAddToCart();
  };

  return (
    <div className="item">
      <img src={imageSrc} alt={description} />
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <form>
        <button onClick={handleClick}>Add To Cart</button>
      </form>
    </div>
  );
};

export default ItemForm;
