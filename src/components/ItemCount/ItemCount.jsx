import React, { useState, useEffect } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setCount(initial);
    setIsDisabled(stock === 0); 
  }, [initial, stock]);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count); 
  };

  return (
    <div className="counter">
      <button onClick={decrement} disabled={count <= initial}>-</button>
      <span>{count}</span>
      <button onClick={increment} disabled={count >= stock}>+</button>
      <button onClick={handleAdd} disabled={isDisabled}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ItemCount;