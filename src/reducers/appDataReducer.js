import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function appDataReducer(state = initialState.appData, action) {

  switch (action.type) {

    default:
      return state;
  }
}
