import * as types from '../actions/types';

const INITIAL = {
  name: '',
  phoneNumber: '',
  email: '',
  address: ''
}

export default function detailReducer(state = INITIAL, action = {}){
  switch(action.type){
    case types.UPDATE_DETAILS:
      let _state = Object.assign({}, state)
      _state[action.key] = action.value;
      return {
        ..._state,
      }
    default:
      return state;
  }
}
