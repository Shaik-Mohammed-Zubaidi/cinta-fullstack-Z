import React from "react";
import './App.css';
import Card from "./Card";
import Drag from './Drag';

const Cards = (props) => {
  const { cardsTobeDisplayed } = props;
  return (
    <div className="card-container">
      {cardsTobeDisplayed.map((card) => (
        <Drag card={card} key={card}>
          <Card cardData={card} cardClass="card"/>
        </Drag>
      ))}
    </div>
  );
};

export default Cards;
