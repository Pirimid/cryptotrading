import {UPDATE_ORDER_BOOK} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function appDataReducer(state = initialState.appData, action) {
  let newState;

  switch (action.type) {
    case 'ads':
        return objectAssign({}, state, { 'active' : action.payload  } );

    default:
      return state;
  }
}
