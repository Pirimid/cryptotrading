import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import currentPair from './currentPairReducer';
import orderBook from './orderBookReducer';
import orderForm from './orderFormReducer';
import appData from './appDataReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  currentPair,
  orderBook,
  orderForm,
  appData,
  routing: routerReducer
});

export default rootReducer;
