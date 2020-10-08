import * as types from '../actions/types';

const INITIAL = {
  sauce: [],
  cheese: [],
  toppings: []
}

export default function orderReducer(state = INITIAL, action = {}){
  switch(action.type){
    case types.UPDATE_ORDER:
      let key = state[action.key];
      let value = action.value;
      if(key.indexOf(value) > -1){
        key.splice(key.indexOf(value), 1)
      }else{
        key.push(value)
      }

      let _state = Object.assign({}, state)
      _state[action.key] = key; 
        
      return _state;
    default:
      return state;
  }
} 
