import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import PizzaHouse from '../pizza-house';
import { connect } from 'react-redux';
import { placeOrder } from '../../actions/orderActions';
import './index.css';

function ConfirmPane(props){
  React.useEffect(() => {
    props.placeOrder();
  }, [])

  return (
    <div className="canvas-container">
      <div className="pizza-container">
        <PizzaHouse />
      </div>
      <div className="pizza-details">
      <div className="header">
          {props.info.customer && <span>Thanks {props.info.customer.name.split(' ')[0]} your pizza is called {props.info.name}</span>}
      </div>
    <div className="footer">
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
    </div>
  );
}

export default withRouter(connect((state) => ({
  info: state.info.info
}), (dispatch) => ({
  placeOrder: () => dispatch(placeOrder())
}))(ConfirmPane))
