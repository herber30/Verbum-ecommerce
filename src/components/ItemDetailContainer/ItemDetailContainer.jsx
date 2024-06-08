// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../components/Context/CartContext';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar o produto.');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProduct();
    }, [id]);

    if (error) {
        return <div>Erro: {error}</div>;
    }

    if (!product) {
        return <div>Carregando...</div>;
    }

    const handleAddToCart = (quantity) => {
        addItem(product, quantity);
    };

    return (
        <div className="item-detail">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Estoque: {product.stock}</p>
            <ItemCount stock={product.stock} onAdd={handleAddToCart} initial={1} />
        </div>
    );
};

export default ItemDetailContainer;
