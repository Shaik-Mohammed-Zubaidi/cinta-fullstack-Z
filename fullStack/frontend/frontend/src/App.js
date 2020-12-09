import React, { useEffect, useState } from "react";
import './App.css';
import Cards from "./Cards";
import Decks from "./Decks";
import axios from 'axios';


function App() {
  const [cardsTobeDisplayed, setCardsTobeDisplayed] = useState([1,2,3,4]);
  const [cardsCollections, setCardsCollections]= useState([]);

  useEffect(() => {
    axios.get('/remainingCards').then(cardsArrayReceived=>{
      // console.log(cardsArrayReceived.data);
      setCardsTobeDisplayed(cardsArrayReceived.data);
    }).catch((error)=>console.log("error occurred ",error));
  },[]);
  useEffect(()=>{
    axios.get('/cardsArrays').then(collectionsReceived=>{
      // console.log(collectionsReceived);
      setCardsCollections(collectionsReceived.data);
    }).catch(error=> console.log("error occurred ", error));
  },[]);
  return (
    <div className="App">
      <Cards cardsTobeDisplayed={cardsTobeDisplayed} />
      <Decks cardsCollections={cardsCollections} />
    </div>
  );
}

export default App;
