import * as types from './types';

export function placeOrder(){
  return (dispatch, getState) => {
    let order = getState().order;
    let details = getState().details;

    return fetch(`https://api.rainbowkereru.com/pizza`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: order,
        details: details
      })
    }).then((r) => {
      return r.json()
    }).then((r) => {
      if(!r.error){
        console.log(r)
        dispatch({type: types.PIZZA_ORDERED, info: r})
      }
    })
  }
}

export function updateOrder(key, value){
  return (dispatch, getState) => {
    return dispatch({type: types.UPDATE_ORDER, key: key, value: value}) 
  }
}
