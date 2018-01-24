import { combineReducers } from 'redux';
import currentPair from './currentPairReducer';
import orderBook from './orderBookReducer';
import orderForm from './orderFormReducer';
import appData from './appDataReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  currentPair,
  orderBook,
  orderForm,
  appData,
  routing: routerReducer
});

export default rootReducer;
