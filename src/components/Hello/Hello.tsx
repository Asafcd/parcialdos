
import React from 'react';
import { useEffect } from 'react';

interface HelloComponent{
    text: string,
    setText?: Function
}

function Hello({text, setText}: HelloComponent) {

    useEffect(()=>{
        setTimeout(() =>  setText && setText('loadedfromblalb'), 5000
    )},[setText])

  return (
    <div className="HelloContainer">
      <p>{text}</p>

    </div>
  );
}

export default Hello;
