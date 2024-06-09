import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
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
    stock: 10, 
  },
  {
    id: 3,
    title: 'Orgulho e Preconceito',
    description: 'Um romance clássico escrito por Jane Austen',
    price: 19.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/61aiRqYj81L._SL1080_.jpg',
    stock: 10, 
  },
  {
    id: 4,
    title: 'Cem anos de solidão',
    description: 'Neste clássico de Gabriel García Marques, conheça as fabulosas aventuras dos Buendía-Iguarán.',
    price: 39.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/71CFWBBPxeL._SL1500_.jpg',
    stock: 10, 
  },
  {
    id: 5,
    title: 'Ensaio sobre a cegueira',
    description: 'Uma terrível ""treva branca"" vai deixando cegos, um a um, os habitantes de uma cidade.',
    price: 24.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/71Hr1-by3UL._SL1500_.jpg',
    stock: 10, 
  },
  {
    id: 6,
    title: 'O sol é para todos',
    description: 'Um dos maiores clássicos da literatura mundial. O sol é para todos ganhou o Prêmio Pulitzer em 1961.',
    price: 14.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/818NT3GSvsL._SL1500_.jpg',
    stock: 10, 
  }
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addItem } = useContext(CartContext);

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

  const handleAddToCart = (quantity) => {
    setQuantityToAdd(quantity);
    addItem(item, quantity);
  };

  if (!item) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-image"> {/* Imagem do livro */}
        <img src={item.pictureUrl} alt={item.title} />
      </div>

      <div className="item-details"> {/* Detalhes do livro */}
        <h1 className="item-title">{item.title}</h1>
        <p className="item-author">Autor: {item.author || 'Autor Desconhecido'}</p> {/* Adiciona autor */}
        <p className="item-price">${item.price}</p>
        <p className="item-description">{item.description}</p>
        <div className="item-actions"> {/* Seção para ações */}
          {quantityToAdd === 0 ? (
            <ItemCount stock={item.stock || 10} initial={1} onAdd={handleAddToCart} />
          ) : (
            <Link to="/cart">
              <button className="buy-button">Finalizar Compra</button>
            </Link>
          )}
        </div>
      </div>
      <Link to="/livros">
        <button className="back-button">Voltar para Livros</button> 
      </Link>
    </div>
  );
};

export default ItemDetailContainer;