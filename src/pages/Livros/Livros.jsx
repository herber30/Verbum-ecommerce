import React, { useContext } from 'react';
import './Livros.scss';
import ItemCount from '../../components/ItemCount/ItemCount';
import CartContext from '../../components/Context/CartContext';

const products = [
  {
    id: 1,
    name: 'O Senhor dos Aneis',
    description: 'Edição de Colecionador com Ilustrações de Alan Lee',
    image: 'https://m.media-amazon.com/images/I/61N4u6ijSeL._SL1200_.jpg',
    stock: 5,
  },
  {
    id: 2,
    name: 'O Olho do Mundo - Série A Roda do Tempo – Vol. 1',
    description: 'Livro que deu origem à série A Roda do Tempo, superprodução do Amazon Prime Video',
    image: 'https://m.media-amazon.com/images/I/51hv6Z7TRPL._SL1000_.jpg',
    stock: 8,
  },
  {
    id: 3,
    name: 'Orgulho e Preconceito',
    description: 'Um romance clássico escrito por Jane Austen.',
    image: 'https://m.media-amazon.com/images/I/61aiRqYj81L._SL1080_.jpg',
    stock: 10,
  },
  {
    id: 4,
    name: 'Cem anos de solidão',
    description: 'Neste clássico de Gabriel García Marques, conheça as fabulosas aventuras dos Buendía-Iguarán.',
    image: 'https://m.media-amazon.com/images/I/71CFWBBPxeL._SL1500_.jpg',
    stock: 16,
  },
  {
    id: 5,
    name: 'Ensaio sobre a cegueira',
    description: 'Uma terrível ""treva branca"" vai deixando cegos, um a um, os habitantes de uma cidade.',
    image: 'https://m.media-amazon.com/images/I/71Hr1-by3UL._SL1500_.jpg',
    stock: 30,
  },
  {
    id: 6,
    name: 'O sol é para todos',
    description: 'Um dos maiores clássicos da literatura mundial. O sol é para todos ganhou o Prêmio Pulitzer em 1961.',
    image: 'https://m.media-amazon.com/images/I/818NT3GSvsL._SL1500_.jpg',
    stock: 4,
  },
  // ... mais produtos
];

const Livros = () => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (productId, quantity) => {
      const product = products.find(p => p.id === productId);
      if (product) {
          addItem(product, quantity);
      }
  };

  return (
      <div className="livros">
          <h1>Livros Disponíveis</h1>
          <div className="products">
              {products.map(product => (
                  <div key={product.id} className="product">
                      <img src={product.image} alt={product.name} />
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <ItemCount stock={product.stock} onAdd={(quantity) => handleAddToCart(product.id, quantity)} />
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Livros;