import * as types from '../constants/actionTypes';

export function updateOrderFormTab(value) {
  return {
    type: types.UPDATE_ORDER_FORM_TAB,
    payload: value
  };
}

export function updateOrderFormExchange(value) {
  return {
    type: types.UPDATE_ORDER_FORM_EXCHANGE,
    payload: value
  };
}

export function updateOrderForm(value) {
  return {
    type: types.UPDATE_ORDER_FORM,
    payload: value
  };
}

export function placeOrder(value) {
  return {
    type: types.ADD_ORDER,
    payload: value
  };
}

export function toggleBuySellOrderForm() {
  return {
    type: types.TOGGLE_BUY_SELL_ORDER_FORM,
  };
}