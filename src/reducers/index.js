import { combineReducers } from 'redux';
import currentPair from './currentPairReducer';
import orderBook from './orderBookReducer';
import orderForm from './orderFormReducer';
import orderTable from './orderTableReducer';
import tradeHistory from './tradeHistoryReducer';
import appData from './appDataReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  currentPair,
  orderBook,
  tradeHistory,
  orderTable,
  orderForm,
  appData,
  routing: routerReducer
});

export default rootReducer;
