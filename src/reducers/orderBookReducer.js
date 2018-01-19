import {UPDATE_ORDER_BOOK} from '../constants/actionTypes';
import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderBookReducer(state = initialState.orderBook, action) {
  let newState;

  switch (action.type) {
    case UPDATE_ORDER_BOOK:
        return objectAssign({}, state, { 'active' : action.payload  } );

    default:
      return state;
  }
}
