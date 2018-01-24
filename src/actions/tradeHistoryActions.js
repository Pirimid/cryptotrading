import * as types from '../constants/actionTypes';

export function updateTradeHistory(value) {
  return {
    type: types.UPDATE_TRADE_HISTORY,
    payload: value
  };
}
