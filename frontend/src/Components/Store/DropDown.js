import { Link, useNavigate } from 'react-router-dom';
import classes from './Dropdown.module.css';
import { motion } from 'framer-motion';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const DropDown = ({ isOpen, toggleDropdown }) => {
    const navigate = useNavigate();

    const handlelogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartItemCount');
        navigate("/");

    }


    return (
        <motion.div
            animate={{ width: isOpen ? '85px' : '22px' }}
            className={classes.dropdownContainer}
            onMouseLeave={toggleDropdown} onMouseEnter={toggleDropdown}
        >
            <ul className={classes.dropdownMenu}>
                <li className={classes.menuItem}>
                    <AccountBoxIcon />
                    My Account
                </li>
                <li className={classes.menuItem}>
                    <FavoriteIcon />
                    Favorite
                </li>
                <li className={classes.menuItem}>
                    <Link to="/yourOrders" className={classes["link-reset"]}><ShoppingBagIcon />Your Orders</Link>
                </li>
                <li className={classes.menuItem}>
                    <PaymentIcon />
                    Payments
                </li>
                <li className={classes.menuItem}>
                    < NotificationsIcon />
                    Notification
                </li>
                <li className={classes.menuItem}>
                    <Link to="/contactus" className={classes["link-reset"]}><ContactMailIcon />Contact Us</Link>
                </li>
                <li className={classes.menuItem}>
                    < LocalOfferIcon />
                    Special Offers
                </li>
                <li className={classes.menuItem}>
                    < CardGiftcardIcon />
                    Reward Card
                </li>
                <li className={classes.menuItem}>
                    <AppSettingsAltIcon />
                    Settings
                </li>
                <li className={classes.menuItem} onClick={handlelogout}>
                    <LogoutIcon />
                    Logout
                </li>
            </ul>
        </motion.div>
    )
}

export default DropDown;
