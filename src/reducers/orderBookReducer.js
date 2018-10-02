import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderBookReducer(state = initialState.orderBook, action) {
  let newState;

  switch (action.type) {
    case types.UPDATE_ORDER_BOOK:
      newState = objectAssign({}, state, { 'active': action.payload });
      break;

    default:
      newState = state;
      break;
  }

  return newState;
}
