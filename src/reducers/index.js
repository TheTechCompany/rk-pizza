import { combineReducers } from 'redux';

import order from './order';
import details from './details';

export default combineReducers({
  order,
  details
})
