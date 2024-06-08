import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../components/Context/CartContext';
import './ItemDetailContainer.scss';

const mockItems = [
  {
    id: 1,
    title: 'O Senhor dos Anéis',
    description: 'Edição de Colecionador com Ilustrações de Alan Lee',
    price: 49.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/61N4u6ijSeL._SL1200_.jpg',
    stock: 10,
  },
  {
    id: 2,
    title: 'O Olho do Mundo - Série A Roda do Tempo – Vol. 1',
    description: 'Livro que deu origem à série A Roda do Tempo',
    price: 29.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/51hv6Z7TRPL._SL1000_.jpg',
    stock: 15,
  },
  {
    id: 3,
    title: 'Orgulho e Preconceito',
    description: 'Um romance clássico escrito por Jane Austen',
    price: 19.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/61aiRqYj81L._SL1080_.jpg',
    stock: 7,
  },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundItem = mockItems.find(item => item.id === parseInt(id));
          resolve(foundItem);
        }, 2000);
      });
    };

    fetchItem().then(data => {
      setItem(data);
    });
  }, [id]);

  if (!item) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="item-detail-container">
      <img src={item.pictureUrl} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>Preço: ${item.price}</p>
      <p>Em estoque: {item.stock}</p>
    </div>
  );
};

export default ItemDetailContainer;