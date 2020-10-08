import { combineReducers } from 'redux';

import order from './order';
import details from './details';
import info from './info';

export default combineReducers({
  info,
  order,
  details
})
