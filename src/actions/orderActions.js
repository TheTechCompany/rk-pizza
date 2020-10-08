import * as types from './types';

export function updateOrder(key, value){
  return (dispatch, getState) => {
    return dispatch({type: types.UPDATE_ORDER, key: key, value: value}) 
  }
}
