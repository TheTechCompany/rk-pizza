import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import PizzaHouse from '../pizza-house';
import './index.css';

function ConfirmPane(props){
  return (
    <div className="canvas-container">
      <div className="pizza-container">
        <PizzaHouse />
      </div>
      <div className="pizza-details">
        <div className="phwoop-action" onClick={() => {
          window.location = "https://phwoop.com" 
        }}>
          Visit the Store
        </div>
        <div className="external-links">
          <TextField 
            fullWidth
            label="Referral Link" 
            value={"https://rainbowkereru.com?r=101"} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(ConfirmPane)
