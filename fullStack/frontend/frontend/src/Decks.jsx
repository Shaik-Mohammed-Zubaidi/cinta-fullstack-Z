import React from "react";
import Card from "./Card";
import DropTarget from "./DropTarget";

const Decks = (props) => {
    const {cardsCollections,cardsTobeDisplayed,setCardsTobeDisplayed}= props;
    function handleDrop(card){
        const filteredCards= cardsTobeDisplayed.filter(cardElement=> cardElement!==card);
        console.log(filteredCards);
        setCardsTobeDisplayed(filteredCards);
    }
  return (
    <div className="deck-container">
      {cardsCollections.map((deckCard) => (
          <DropTarget key={deckCard.name} onCardDropped={handleDrop} cardData={deckCard.name}>
              <Card cardClass="deckCard" cardData={deckCard.name}/>
          </DropTarget>
      ))}
    </div>
  );
};

export default Decks;
