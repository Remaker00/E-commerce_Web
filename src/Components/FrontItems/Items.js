import React from 'react';
import Item from './Item';
import classes from './Item.module.css'

import cam1 from '../FrontItems/Product_Images/cam1.png';
import game from '../FrontItems/Product_Images/game.png';
import home1 from '../FrontItems/Product_Images/home1.png';
import ref from '../FrontItems/Product_Images/ref1.png';
import laptop from '../FrontItems/Product_Images/laptop.png';
import phone1 from '../FrontItems/Product_Images/phone1.png';
import tv1 from '../FrontItems/Product_Images/tv1.png';
import watch1 from '../FrontItems/Product_Images/watch1.png';
import tv2 from '../FrontItems/Product_Images/tv2.png'

const Items = () => {
  return (
    <div className={classes["items-container"]}>
      <div className={classes["itms"]}>
        <Item
          imageSrc={cam1}
          description="Camera Description"
          price="$199.99"
        />
      </div>
      <div className={classes["itms"]}>
        <Item
          imageSrc={game}
          description="Game Description"
          price="$299.99"
        />
      </div>
      <div className={classes["itms"]}>
        <Item
          imageSrc={home1}
          description="Home Description"
          price="$499.99"
        />
      </div>
      <div className={classes["itms"]}>
        <Item
          imageSrc={ref}
          description="Refrigerator Description"
          price="$399.99"
        />
      </div>
      <div className={classes["itms"]}>
        <Item
          imageSrc={tv1}
          description="Television1 Description"
          price="$299.99"
        />
      </div>
      <div className={classes["itms"]}>
        <Item
          imageSrc={laptop}
          description="Laptop Description"
          price="$299.99"
        />
      </div>
      <div className={classes["itms"]}>
        <Item
          imageSrc={watch1}
          description="Watch Description"
          price="$299.99"
        />
      </div>
      <div className={classes["itms"]}>
        <Item
          imageSrc={tv2}
          description="Television2 Description"
          price="$299.99"
        />
      </div>
      <div className={classes["itms"]}>
        <Item
          imageSrc={phone1}
          description="Phone Description"
          price="$299.99"
        />
      </div>

    </div>
  );
};

export default Items;
