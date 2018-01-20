import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderFormReducer(state = initialState.orderForm, action) {
  let newState;

  switch (action.type) {
    case types.UPDATE_ORDER_FORM_TAB:
        return objectAssign({}, state, { 'activeTab' : action.payload  } );

    case types.UPDATE_ORDER_FORM_EXCHANGE:
        return objectAssign({}, state, { 'exchange' : action.payload  } );

    case types.UPDATE_ORDER_FORM:
        return objectAssign({}, state, action.payload );

    default:
      return state;
  }
}
