import HeaderCartButton from './Cart/HeaderCartButton';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ cartItemCount, onButtonClick, searchQuery, handleSearch }) => {

  return (
    <div className='container'>
      <ul className='left'>
        <li><Link to="/productform">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className='center'>
        <h2>ZUWAVA</h2>
      </div>
      <div className='right'>
        <div className='right1'>
          <label><SearchIcon /></label><input type='text' placeholder='Search Here...' value={searchQuery} onChange={handleSearch} />
        </div>
        <HeaderCartButton itemCount={cartItemCount} onButtonClick={onButtonClick} />
      </div>
    </div>
  )
}

export default Header