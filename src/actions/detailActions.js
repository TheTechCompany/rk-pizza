import * as types from './types';

export function updateDetails(key, value){
  return (dispatch, getState) => {
    return dispatch({type: types.UPDATE_DETAILS, key: key, value: value}) 
  }
}
