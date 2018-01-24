import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function currentPairReducer(state = initialState.currentPair, action) {
  let newState;

  switch (action.type) {
    case SAVE_FUEL_SAVINGS:
    default:
      return state;
  }
}
