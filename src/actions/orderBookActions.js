import * as types from '../constants/actionTypes';

export function updateOrderBook(value) {
  return {
    type: types.UPDATE_ORDER_BOOK,
    payload: value
  };
}
