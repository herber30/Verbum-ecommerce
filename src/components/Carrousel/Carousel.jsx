import React from 'react';
import '../Carousel/Carousel.scss';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src="https://via.placeholder.com/800x300" alt="Promoção 1" />
      </div>
      <div className="carousel-item">
        <img src="https://via.placeholder.com/800x300" alt="Promoção 2" />
      </div>
      <div className="carousel-item">
        <img src="https://via.placeholder.com/800x300" alt="Promoção 3" />
      </div>
    </div>
  );
}

export default Carousel;
