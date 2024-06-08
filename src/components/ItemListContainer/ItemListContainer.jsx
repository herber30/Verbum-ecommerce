import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.scss'

function ItemListContainer({ items, onAdd }) {
 return (
   <div className="item-list-container">
     {items.map(item => (
       <div key={item.id} className="product-card">
         <img src={item.image} alt={item.name} className="product-image" />
         <h2 className="product-title">{item.name}</h2>
         <p className="product-description">{item.description}</p>
         <ItemCount initial={1} stock={item.stock} onAdd={(quantity) => onAdd(item.id, quantity)} />
       </div>
     ))}
   </div>
 );
}

export default ItemListContainer