import React, { useEffect, useState } from "react";
import './App.css';
import Cards from "./Cards";
import Decks from "./Decks";
import axios from 'axios';
import GameButtons from './GameButtons';


function App() {
  const [cardsTobeDisplayed, setCardsTobeDisplayed] = useState([1,2,3,4]);
  const [cardsCollections, setCardsCollections]= useState([]);

  useEffect(() => {
    axios.get('/remainingCards').then(cardsArrayReceived=>{
      console.log(cardsArrayReceived.data);
      setCardsTobeDisplayed(cardsArrayReceived.data);
    }).catch((error)=>console.log("error occurred ",error));
  },[]);
  useEffect(()=>{
    axios.get('/cardsArrays').then(collectionsReceived=>{
      console.log(collectionsReceived.data);
      setCardsCollections(collectionsReceived.data);
    }).catch(error=> console.log("error occurred ", error));
  },[]);

  const saveProgress = async() =>{    
    axios.put('/remainingCards',cardsTobeDisplayed).then(_=>{
      console.log("saved progress");
    }).catch(error=> console.log("error occurred ",error));
  }
  const restart = async()=>{
    let collectionsCopy= [];
    let remainingCardsArray= [];
    axios.get('/restart').then(result=>{
      let collectionsReceived= result.data;
      collectionsReceived.forEach(collection=>{
        if(!(collection.remaining)){
          collectionsCopy.push(collection);
        }
        else{
          remainingCardsArray= collection.cardsArray;
        }
      })
      setCardsTobeDisplayed(remainingCardsArray);
      setCardsCollections(collectionsCopy);
    })
  }

  return (
    <div className="App">
      <Cards cardsTobeDisplayed={cardsTobeDisplayed} />
      <Decks cardsCollections={cardsCollections} cardsTobeDisplayed={cardsTobeDisplayed} setCardsTobeDisplayed={setCardsTobeDisplayed} />
      <GameButtons saveProgress={saveProgress} restart={restart}/>
    </div>
  );
}

export default App;
