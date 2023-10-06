import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './Cart/HeaderCartButton';

const Header = ({ cartItemCount, onButtonClick }) => {

  return (
    <div className={classes.container}>
        <ul className={classes.left}>
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
            <li>contact</li>
        </ul>
        <div className={classes.center}>
            <h2>ZUWAVA</h2>
        </div>
        <div className={classes.right}>
            <label>Search</label><input type='text' placeholder='Search Here...' />
            <HeaderCartButton itemCount={cartItemCount} onButtonClick={onButtonClick} />
        </div>
    </div>
  )
}

export default Header
