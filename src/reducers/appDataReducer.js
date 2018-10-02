import initialState from './initialState';

export default function appDataReducer(state = initialState.appData, action) {

  switch (action.type) {

    default:
      return state;
  }
}
