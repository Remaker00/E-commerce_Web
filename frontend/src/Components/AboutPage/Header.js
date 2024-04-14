import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='container'>
      <ul className='left'>
        <li><Link to="/productform">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>Categories</li>
      </ul>
    </div>
  )
}

export default Header
