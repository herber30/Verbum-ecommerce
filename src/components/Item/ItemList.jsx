import React from 'react';
import Item from './item';
import './ItemList.scss'; 

const ItemList = ({ items }) => {
  return (
    <div className="item-list-container">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;