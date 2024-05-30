import React from 'react';
import './VerticalBanner.scss';

const genres = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Livros_plano_nacional_de_leitura.jpg',
    title: 'Ficção',
    description: 'Explore o mundo da ficção com nossas coleções incríveis.',
  },
  {
    id: 2,
    image: 'https://f.i.uol.com.br/fotografia/2022/05/03/1651607765627188d5dbd77_1651607765_3x2_rt.jpg',
    title: 'Não-Ficção',
    description: 'Descubra a verdade com nossos livros de não-ficção.',
  },
  {
    id: 3,
    image: 'https://pm1.aminoapps.com/7182/b8df52ff4d8b157296382a7079ae427f3e5ae87ar1-900-1203v2_hq.jpg',
    title: 'Fantasia',
    description: 'Viaje para reinos mágicos com nossos livros de fantasia.',
  },
  {
    id: 4,
    image: 'https://wallpaper-house.com/data/out/9/wallpaper2you_362982.jpg',
    title: 'Ficção Científica',
    description: 'Viaje para o futuro e descubra novas realidades com nossos livros de ficção científica.',
  },
];

const VerticalBanner = () => {
  return (
    <div className="vertical-banner-container">
      {genres.map((genre) => (
        <div key={genre.id} className="vertical-banner">
          <img src={genre.image} alt={genre.title} />
          <div className="vertical-banner-info">
            <h2>{genre.title}</h2>
            <p>{genre.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VerticalBanner;
