import React from 'react';

const DropTarget= (props) =>{
    function allowDrop(event){ event.preventDefault(); }

    function drop(event){
        event.preventDefault();
        const cardDropped= event.dataTransfer.getData("text");
        if(props.cardData[0]!==cardDropped[0]){
            return;
        }
        props.onCardDropped(cardDropped);
    }
    return <div onDragOver={allowDrop} onDrop={drop}>
        {props.children}
    </div>
}

export default DropTarget;