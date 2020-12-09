import React from 'react';

const Drag=(props)=>{
    function drag(event,card){
        event.dataTransfer.setData("text", card);
      }
    return <div draggable onDragStart={(event)=>drag(event,props.card)}>
        {props.children}
    </div>
}

export default Drag;