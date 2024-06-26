import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ItemList from '../../components/Item/ItemList'; 
import './Livros.scss';

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
              description: 'Um romance clássico escrito por Jane Austen.',
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

    const Livros = ({ handleAddToCart }) => {
      const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchItems = () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(mockItems); // Resolva a promise com os dados mockados
            }, 2000); // Simulando um atraso de 2 segundos
          });
        };
    
        fetchItems()
          .then((data) => {
            setItems(data);
          })
          .finally(() => {
            setLoading(false); // Define loading como false após a busca, independente do resultado
          });
      }, []);
    
      return (
        <div className="livros">
          <h1>Livros Disponíveis</h1>
    
          {loading ? (
            <div className="loader">
              {mockItems.map((product) => (
                <div key={product.id} className="skeleton-loader">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-title"></div>
                  <div className="skeleton-description"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="products">
              <ItemList items={items} handleAddToCart={handleAddToCart} />
            </div>
          )}
        </div>
      );
    };
    
    export default Livros;