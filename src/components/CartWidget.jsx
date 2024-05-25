import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.scss';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;