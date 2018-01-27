import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function appDataReducer(state = initialState.currentPair, action) {

  switch (action.type) {
    case types.UPDATE_CURRENCY_PAIR:
        return objectAssign({}, state, action.payload );
        break;

    default:
      return state;
  }
}
