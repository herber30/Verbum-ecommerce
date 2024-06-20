import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../components/Context/CartContext';
import './ItemDetailContainer.scss'
import { FaStar, FaShareAlt } from 'react-icons/fa'

const mockItems = [
  {
    id: 1,
    title: 'O Senhor dos Anéis',
    description: 'Edição de Colecionador com Ilustrações de Alan Lee',
    price: 49.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/61N4u6ijSeL._SL1200_.jpg',
  },
  {
    id: 2,
    title: 'O Olho do Mundo - Série A Roda do Tempo – Vol. 1',
    description: 'Livro que deu origem à série A Roda do Tempo',
    price: 29.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/51hv6Z7TRPL._SL1000_.jpg',
  },
  {
    id: 3,
    title: 'Orgulho e Preconceito',
    description: 'Um romance clássico escrito por Jane Austen',
    price: 19.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/61aiRqYj81L._SL1080_.jpg',
  },
  {
    id: 4,
    title: 'Cem anos de solidão',
    description: 'Neste clássico de Gabriel García Marques, conheça as fabulosas aventuras dos Buendía-Iguarán.',
    price: 39.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/71CFWBBPxeL._SL1500_.jpg',
  },
  {
    id: 5,
    title: 'Ensaio sobre a cegueira',
    description: 'Uma terrível ""treva branca"" vai deixando cegos, um a um, os habitantes de uma cidade.',
    price: 24.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/71Hr1-by3UL._SL1500_.jpg',
  },
  {
    id: 6,
    title: 'O sol é para todos',
    description: 'Um dos maiores clássicos da literatura mundial. O sol é para todos ganhou o Prêmio Pulitzer em 1961.',
    price: 14.99,
    pictureUrl: 'https://m.media-amazon.com/images/I/818NT3GSvsL._SL1500_.jpg',
  }
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    addItem(item, quantity);
  };

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundItem = mockItems.find((item) => item.id === parseInt(id));
          resolve(foundItem);
        }, 2000); // Simulando um atraso de 2 segundos
      });
    };

    fetchItem()
      .then((data) => {
        setItem(data);
      })
      .finally(() => {
        setLoading(false); // Define loading como false após a busca, independente do resultado
      });
  }, [id]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <div className="loader">
          <div className="spinner"></div> 
        </div>
      ) : item ? ( // Verifica se o item foi encontrado
        <>
          <img src={item.pictureUrl} alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <ItemCount stock={10} onAdd={handleAddToCart} /> 
        </>
      ) : (
        <p>Item não encontrado</p> // Mensagem caso o item não seja encontrado
      )}
    </div>
  );
};

export default ItemDetailContainer;