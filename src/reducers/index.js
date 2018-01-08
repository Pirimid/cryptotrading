import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import currentPair from './currentPairReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  currentPair,
  routing: routerReducer
});

export default rootReducer;
