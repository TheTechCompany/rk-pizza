import React from 'react';

import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { connect } from 'react-redux';
import { updateOrder } from '../../actions/orderActions';
import './index.css';

function OrderPane(props){
  const [ step, setStep ] = React.useState(0)
  const [ selected, setSelected ] = React.useState(null)
  const options = [{
    label: "Sauce",
    key: "sauce",
    items: [
      "Tomato",
      "Butterchicken",
      "Korma"
    ]
  },
    {
      label: "Cheese",
      key: "cheese",
      items: [
        "Mozzarella",
        "Dairy Free Mozarella",
        "Feta",
        "Fresh Mozzarella"
      ]
    },
    {
      label: "Toppings",
      key: "toppings",
      items: [
        "Spinach",
        "Capsicum",
        "Olives",
        "Jalapenos",
        "Mushrooms",
        "Pineapple"
      ]
    }
  ]


  const getOrderDefaults = () => {
    let order = {}
    options.map((x) => {
      let opts = {}
      x.items.map((k) => {
        opts[k] = false;
      })
      order[x.key] = opts;
    })
    console.log(order)
    return order;
  }
  const [ order, setOrder ] = React.useState(getOrderDefaults())

  return (
    <div className="order-pane">
      <Stepper activeStep={step}>
        {options.map((x, ix) => {
          
          return (
            <Step key={ix}>
              <StepLabel>{x.label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div className="order-section">
          {options[step].items.map((x) => (
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={props.order[options[step].key].indexOf(x) > -1}
                    onChange={(e) => {
                      props.updateOrder(options[step].key, x)
                    }}
                    />}
                label={x}/>
            </FormGroup>
          ))} 
      </div>
      <div className="order-action">
        <Button
          disabled={!(step > 0)}
          color="primary"
          onClick={() => setStep(step -1)}
          variant="contained">Back</Button>
        <Button 
          color="primary" 
          onClick={() => {
            if(step >= options.length -1){
              props.onDone(order)
            }else{
              setStep(step + 1)
            }
          }}
          variant="contained">Next</Button>
      </div>
    </div>
  );
}

export default connect((state) => ({
  order: {
    sauce: state.order.sauce,
    cheese: state.order.cheese,
    toppings: state.order.toppings
  }
}), (dispatch) => ({
  updateOrder: (key, value) => dispatch(updateOrder(key, value))
}))(OrderPane)
