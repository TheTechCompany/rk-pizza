import React from 'react';

import PizzaHouse from '../pizza-house';
import './index.css';

export default function WaitingRoom(props){
  return (
    <div className="waiting-room">
      <div className="container">
        <PizzaHouse />
      </div>
      <div className="info">
        {props.children}
      </div>
    </div>
  );
} 
