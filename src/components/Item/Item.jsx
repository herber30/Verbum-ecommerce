import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../components/Context/CartContext';
import './Item.scss';

const Item = ({ item }) => {
    return (
      <div className="item">
        <h2>{item.title}</h2>
        <img src={item.pictureUrl} alt={item.title} />
        <p>Preço: ${item.price}</p>
        <Link to={`/item/${item.id}`}>
          <button>Veja detalhes do produto</button>
        </Link>
        <p>Em estoque: {item.stock}</p>
      </div>
    );
  };
  
  export default Item;