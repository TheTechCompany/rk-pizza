import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import './index.css';

export default function OrderPane(props){
  const [ order, setOrder ] = React.useState({sauce: {}, cheese: {}, toppings: {}})
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
  return (
    <div className="order-pane">
      <div className="order-sections">
        {options.map((x, ix) => (
          <div className="order-options">
            <div className="order-option__label" onClick={() => {
              setSelected(ix !== selected ? ix : null)
            }}>
              <h5>{x.label}</h5>{ix == selected ? <ExpandLess /> : <ExpandMore />}
            </div>
                <Divider />
            <Collapse in={ix == selected}>
              <div className="order-option__options">
              {x.items.map((y) => (
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox onChange={(e) => {
                      let o = Object.assign({}, order)
                      o[x.key][y] = e.target.checked;
                      setOrder(o)
                    }} checked={order[x.key][y]} />}
                      label={y} />
                </FormGroup>
              ))}
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}
