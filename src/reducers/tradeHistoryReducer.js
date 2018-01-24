import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function tradeHistoryReducer(state = initialState.tradeHistory, action) {
  let newState;

  switch (action.type) {
    case types.UPDATE_TRADE_HISTORY:
        return objectAssign({}, state, { 'active' : action.payload  } );
        break;

    default:
      return state;
  }
}
