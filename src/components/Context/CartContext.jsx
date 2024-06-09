import React, { createContext, useState, useEffect } from 'react';


const CartContext = createContext({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    isInCart: () => {},
    totalItems: 0,
    totalPrice: 0,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const clear = () => {
        setCartItems([]);
    };

    const isInCart = (itemId) => {
        return cartItems.some(item => item.id === itemId);
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;