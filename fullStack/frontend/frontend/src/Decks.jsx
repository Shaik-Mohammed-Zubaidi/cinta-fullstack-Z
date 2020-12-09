import React from "react";
import Card from "./Card";

const Decks = (props) => {
    const {cardsCollections}= props;
  return (
    <div className="deck-container">
      {cardsCollections.map((deckCard) => (
        <Card key={deckCard.name} cardClass="deckCard" cardData={deckCard.name} deckCardLength={deckCard.cardsArray.length} />
      ))}
    </div>
  );
};

export default Decks;
