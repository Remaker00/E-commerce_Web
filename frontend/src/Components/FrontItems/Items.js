import React from 'react';
import ItemForm from './ItemForm';
import { Link } from 'react-router-dom';

const Items = ({ filteredItems, onAddToCart }) => {



  const itemsList = filteredItems.map((item) => (
    <div className='itms' key={item.id}>
      <Link to={`/ProductReview/${item.id}`}>Read Review</Link>

      <ItemForm
        imageSrc={item.imageSrc}
        name={item.name}
        description={item.description}
        price={`Price: $${item.price}`}
        onAddToCart={() => onAddToCart(item)}
      />
    </div>
  ))

  return (
    <div className='items-container'>
      {itemsList}
    </div>
  );
};

export default Items;
