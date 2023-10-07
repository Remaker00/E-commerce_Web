import React from 'react';
import ItemForm from './ItemForm';
import classes from './Item.module.css';

const ITEMS_DATA = [
  {
    id: 'item1',
    imageSrc: require('../FrontItems/Product_Images/cam1.png'),
    description: 'Camera Description',
    price: 199.99,
  },
  {
    id: 'item2',
    imageSrc: require('../FrontItems/Product_Images/game.png'),
    description: 'Game Description',
    price: 299.99,
  },
  {
    id: 'item3',
    imageSrc: require('../FrontItems/Product_Images/tv2.png'),
    description: 'Television2 Description',
    price: 499.99,
  },
  {
    id: 'item4',
    imageSrc: require('../FrontItems/Product_Images/ref1.png'),
    description: 'refrigerator Description',
    price: 499.99,
  },
  {
    id: 'item5',
    imageSrc: require('../FrontItems/Product_Images/laptop.png'),
    description: 'Laptop Description',
    price: 499.99,
  },
  {
    id: 'item6',
    imageSrc: require('../FrontItems/Product_Images/phone1.png'),
    description: 'Phone1 Description',
    price: 499.99,
  },
  {
    id: 'item7',
    imageSrc: require('../FrontItems/Product_Images/tv1.png'),
    description: 'Television1 Description',
    price: 499.99,
  },
  {
    id: 'item8',
    imageSrc: require('../FrontItems/Product_Images/watch1.png'),
    description: 'Watch1 Description',
    price: 499.99,
  },
  {
    id: 'item9',
    imageSrc: require('../FrontItems/Product_Images/home1.png'),
    description: 'Home Description',
    price: 499.99,
  },
];

const Items = ({onAddToCart}) => {

  const itemsList = ITEMS_DATA.map((item) => (
    <div className={classes['itms']} key={item.id}>
      <ItemForm
        imageSrc={item.imageSrc}
        description={item.description}
        price={item.price}
        onAddToCart={() => onAddToCart(item)}
      />
    </div>
  ))

  return (
    <div className={classes["items-container"]}>
      {itemsList}
    </div>
  );
};

export default Items;
