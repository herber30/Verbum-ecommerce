import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from '../Item/ItemList';
import './ItemListContainer.scss'


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
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
            }
          ]); 
        }, 2000);
      });
    };

    fetchItems().then(data => {
      setItems(data);
    });
  }, []);

  return (
    <div className="item-list-container">
      {items.length === 0 ? (
        <div>Carregando...</div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;