import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import currentPair from './currentPairReducer';
import orderBook from './orderBookReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  currentPair,
  orderBook,
  routing: routerReducer
});

export default rootReducer;
