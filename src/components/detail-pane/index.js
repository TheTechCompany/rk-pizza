import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { updateDetails } from '../../actions/detailActions';
import './index.css';

function DetailPane(props){
  return (
    <div className="detail-pane">
      <TextField 
        value={props.details.name}
        onChange={(e) => {
          props.updateDetails('name', e.target.value)
        }}
        label="Name" 
        fullWidth />
      <TextField 
        value={props.details.phoneNumber}
        onChange={(e) => {
          props.updateDetails('phoneNumber', e.target.value)
        }}
        label="Phone Number" 
        fullWidth />
      <TextField 
        value={props.details.email}
        onChange={(e) => {
          props.updateDetails('email', e.target.value)
        }}
        label="Email Address" 
        fullWidth />
      <TextField 
        label="Address" 
        value={props.details.address}
        onChange={(e) => {
          props.updateDetails('address', e.target.value)
        }}
        fullWidth />
    </div>
  );
}

export default connect((state) => ({
  details: state.details,
}), (dispatch) => ({
  updateDetails: (key, value) => dispatch(updateDetails(key, value))
}))(DetailPane)
