import React, { useState, useEffect } from 'react';
import ItemList from '../Item/ItemList';
import './ItemListContainer.scss';

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

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockItems);
        }, 2000);
      });
    };

    fetchItems().then(data => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="item-list-container">
      {loading ? <div>Carregando...</div> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;