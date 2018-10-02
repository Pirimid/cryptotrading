import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function appDataReducer(state = initialState.currentPair, action) {
  let newState;

  switch (action.type) {
    case types.UPDATE_CURRENCY_PAIR:
      newState = objectAssign({}, state, action.payload);
      break;

    default:
      newState = state;
      break;
  }

  return newState;
}
