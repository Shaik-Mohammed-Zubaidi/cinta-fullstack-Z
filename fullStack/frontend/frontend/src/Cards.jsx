import React from "react";
import './App.css';
import Card from "./Card";

const Cards = (props) => {
  const { cardsTobeDisplayed } = props;
  return (
    <div className="card-container">
      {cardsTobeDisplayed.map((card) => (
        <Card key={card} cardData={card} cardClass="card" />
      ))}
    </div>
  );
};

export default Cards;
