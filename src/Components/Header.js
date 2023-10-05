import React from 'react'
import classes from './Header.module.css';

const Header = () => {
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
            <div>Cart</div>
        </div>
    </div>
  )
}

export default Header
