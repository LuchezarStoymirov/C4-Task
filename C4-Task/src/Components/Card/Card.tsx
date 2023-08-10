import React from "react";
import style from "./Card.module.css";

interface CardProps {
  card: {
    image: string;
    title: string;
    description: string;
    price: string;
  };
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={style.container}>
      <img src={card.image} alt={card.title} className={style.image} />
      <h3 className={style.title}>{card.title}</h3>
      <p className={style.description}>{card.description}</p>
      <p className={style.price}>{card.price}</p>
    </div>
  );
};
