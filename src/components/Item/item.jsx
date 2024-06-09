import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss'; 

const Item = ({ item }) => {
    return (
      <div className="product-card"> 
        <Link to={`/item/${item.id}`}> {/* Link para a página de detalhes */}
          <img src={item.pictureUrl} alt={item.title} className="product-image" />
          <h2 className="product-title">{item.title}</h2>
          <p className="product-description">{item.description}</p>
          <p className="product-price">${item.price}</p>
          <button className="view-details-button">Ver Detalhes</button> {/* Botão para ver detalhes */}
        </Link>
      </div>
    );
  };
  
  export default Item;