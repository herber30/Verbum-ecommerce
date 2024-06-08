import React, { createContext, useState, useEffect } from 'react';

// Cria o contexto
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Função para adicionar item ao carrinho
    const addItem = (item, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i => 
                    i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
                );
            }
            return [...prevItems, { ...item, quantity }];
        });
    };

    // Função para remover item do carrinho
    const removeItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    // Função para limpar o carrinho
    const clear = () => {
        setCartItems([]);
    };

    // Função para verificar se um item está no carrinho
    const isInCart = (id) => {
        return cartItems.some(item => item.id === id);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
