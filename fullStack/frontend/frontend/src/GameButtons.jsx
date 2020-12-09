import React from 'react';

const GameButtons = (props)=>{
    const {saveProgress,restart}= props;
    return <div>
        <button onClick={saveProgress}>Save</button>
      <button onClick={restart}>Restart</button>
    </div>
}

export default GameButtons;