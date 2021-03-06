import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { connect } from 'react-redux';
import { updateOrder } from '../../actions/orderActions';
import './index.css';

function OrderPane(props){
  const [ step, setStep ] = React.useState(0)

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
      optional: true,
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


  const canNext = () => {
    switch(step){
      case 0:
        return !(props.order.sauce.length > 0)
      case 1:
        return false;
      case 2:
        return !(props.order.toppings.length > 0)
      default:
        return false;
    }
  }

  return (
    <div className="order-pane">
      <Stepper activeStep={step}>
        {options.map((x, ix) => {
          let stepProps = {

          }

          if(x.optional){
            stepProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          return (
            <Step key={ix}>
              <StepLabel {...stepProps}>{x.label}</StepLabel>
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
          disabled={canNext()}
          color="primary" 
          onClick={() => {
            if(step >= options.length -1){
              props.onDone()
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
