import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import OrderPane from './components/order-pane';
import DetailsPane from './components/detail-pane';
import ConfirmPane from './components/confirm-pane';
import logo from './logo.svg';
import './App.css';

function App() {
  const [step, setStep] = React.useState(0);
  const [ order, setOrder ] = React.useState(null)
  const [ details, setDetails ] = React.useState(null)

  const steps = [
    {
      label: 'Create your pizza',
      component: <OrderPane onDone={(order) => {
        setOrder(order)
        setStep(1)
      }}/>
    },
    {
      label: 'Enter your details',
      component: <DetailsPane />
    },
    {
      label: 'Making your pizza',
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
    <div className="App">
      <div className="order-container">
        <Paper style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingBottom: 8}}>
        <div className="order-header">
          <img src={'/logo.png'} className="App-logo" alt="logo" />
          <h2>{steps[step].label}</h2>
        </div>
          {steps[step].component}
          {step > 0 && (<div className="action-pane">
            <Button color="primary" variant="contained" onClick={goBack}>Back</Button>
            <Button color="primary" variant="contained" onClick={goNext}>Next</Button>
          </div>)}
        </Paper>
        </div>

    </div>
  );
}

export default App;
