import React from 'react';
import './Banner.scss';

const banners = [
  {
    id: 1,
    image: 'https://podpop.com.br/PodPOP/wp-content/uploads/2021/12/Banner-livros-Podpop.jpg',
    title: 'Desconto de 50%',
    description: 'Aproveite nossas ofertas de 50% de desconto em diversos produtos.',
  },
  {
    id: 2,
    image: 'https://cdn.record.com.br/wp-content/uploads/2021/10/25132853/Banner-cota_18.jpg',
    title: 'Leve 3 Pague 2',
    description: 'Na compra de 3 livros, o mais barato é grátis.',
  },
  {
    id: 3,
    image: 'https://cdn.record.com.br/wp-content/uploads/2021/10/25130630/Banner-cota-20.jpg',
    title: 'Frete Grátis',
    description: 'Frete grátis para compras acima de R$100,00.',
  },
];

const Banner = () => {
  return (
    <div className="banner-container">
      {banners.map((banner) => (
        <div key={banner.id} className="banner">
          <img src={banner.image} alt={banner.title} />
          <div className="banner-info">
            <h2>{banner.title}</h2>
            <p>{banner.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
