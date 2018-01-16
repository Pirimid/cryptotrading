import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderBookReducer(state = initialState.orderBook, action) {
  let newState;

  switch (action.type) {
    case SAVE_FUEL_SAVINGS:
    default:
      return state;
  }
}
