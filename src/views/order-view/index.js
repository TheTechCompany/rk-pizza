import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import OrderPane from '../../components/order-pane';
import DetailsPane from '../../components/detail-pane';
import ConfirmPane from '../../components/confirm-pane';
import './index.css';

export default function OrderView(props){
  const [step, setStep] = React.useState(0);
  const steps = [
    {
      label: 'Choose your pizza',
      component: <OrderPane onDone={() => {
        setStep(1)
      }}/>
    },
    {
      label: 'Identify your pizza',
      component: <DetailsPane />
    },
    {
      label: 'Love your pizza',
      component: <ConfirmPane />
    }
  ]

  const goBack = () => {
    if(step >= 1){
      setStep(step - 1)
    }
  }

  const goNext = () => {
    if(step < steps.length){
      setStep(step + 1)
    }
  }

  return (

      <div className="order-container">
        <Paper style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingBottom: 8}}>
        <div className="order-header">
          <img src={'/logo.png'} className="App-logo" alt="logo" />
          <h2 >{steps[step].label}</h2>
        </div>
          {steps[step].component}
          {(step > 0  && step < (steps.length -1) )&& (<div className="action-pane">
            <Button color="primary" variant="contained" onClick={goBack}>Back</Button>
            <Button color="primary" variant="contained" onClick={goNext}>Next</Button>
          </div>)}
        </Paper>
        </div>

  );
}
