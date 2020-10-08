import * as types from '../actions/types';

const INITIAL = {
  info: {}
}

export default function infoReducer(state = INITIAL, action = {}){
  switch(action.type){
    case types.PIZZA_ORDERED:
      return {
        ...state,
        info: action.info
      }
    default:
      return state;
  }
}
