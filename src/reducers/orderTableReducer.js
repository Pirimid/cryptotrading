import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderBookReducer(state = initialState.orderTable, action) {
  let newState;

  switch (action.type) {
    case types.ADD_ORDER:
      newState = state.push(action.payload);
      newState = objectAssign([], state, newState);
      break;

    default:
      newState = state;
      break;
  }

  return newState;
}
