import React, { ReactElement } from 'react';
import './Card.css';

interface Props {
  src: string;
  title: string;
  description: string;
  price?: string;
}

function Card({ src, title, description, price }: Props): ReactElement {
  return (
    <div className='card'>
      <img src={src} alt={title} />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Card
