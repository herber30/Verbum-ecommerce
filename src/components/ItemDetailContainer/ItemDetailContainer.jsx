import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'; 

const ItemDetailContainer = ({ onAdd }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); 

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

  return (
    <div className="item-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Estoque: {product.stock}</p>
      <ItemCount stock={product.stock} onAdd={(quantity) => onAdd(product.id, quantity)} initial={1} /> 
    </div>
  );
};

export default ItemDetailContainer;