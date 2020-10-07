import React from 'react';
import TextField from '@material-ui/core/TextField';
import './index.css';

export default function DetailPane(props){
  return (
    <div className="detail-pane">
      <TextField label="Name" fullWidth />
      <TextField label="Phone Number" fullWidth />
      <TextField label="Email Address" fullWidth />
      <TextField label="Address" fullWidth />
    </div>
  );
}
