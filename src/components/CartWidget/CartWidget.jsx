import React, { useState, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../components/Context/CartContext';
import CartDropdown from '../CartDropdown/CartDropdown';
import './CartWidget.scss';

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="cart-widget" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <FaShoppingCart />
            <span className="item-count">{cartItems.length}</span>
            {showDropdown && <CartDropdown />}
        </div>
    );
};

export default CartWidget;