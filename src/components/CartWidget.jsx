import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../components/CartWidget.scss';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">4</span> {/* Exemplo de contagem de itens */}
    </div>
  );
}

export default CartWidget;