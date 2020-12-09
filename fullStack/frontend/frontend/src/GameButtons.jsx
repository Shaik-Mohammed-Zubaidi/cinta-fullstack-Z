import React from 'react';
import './App.css';

const GameButtons = (props)=>{
    const {saveProgress,restart}= props;
    return <div>
        <button onClick={saveProgress} className="button">Save</button>
      <button onClick={restart} className="button">Restart</button>
    </div>
}

export default GameButtons;