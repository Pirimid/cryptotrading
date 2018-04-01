import * as ActionTypes from '../../src/constants/actionTypes';
import * as orderFormActions from '../../src/actions/orderFormActions';

describe('orderFormActions', () => {

  it('should create an action to update the order form tab', () => {
    let currencyPair = {"last24HourPrice": 6.35, "last24HourVolume": 1681, "lastTradePrice": 1123.01, "unit1": "ETH", "unit2": "USD"};
    const expected = {
      type: ActionTypes.UPDATE_ORDER_FORM_TAB,
      payload : currencyPair,
    };

    expect(orderFormActions.updateOrderFormTab(currencyPair)).toEqual(expected);
  });

  it('should create an action to update the order form exchange data', () => {
    let exchange = { name: 'GDAX'}
    const expected = {
      type: ActionTypes.UPDATE_ORDER_FORM_EXCHANGE,
      payload : exchange,
    };
    expect(orderFormActions.updateOrderFormExchange(exchange)).toEqual(expected);
  });

  it('should create an action to update the order form', () => {
    let data = {type: "BUY", tab: "Limit", price: 12000};
    const expected = {
      type: ActionTypes.UPDATE_ORDER_FORM,
      payload : data,
    };
    expect(orderFormActions.updateOrderForm(data)).toEqual(expected);
  });

  it('should create an action to add an order', () => {
    let order = { size: 55, price: 11000};
    const expected = {
      type: ActionTypes.ADD_ORDER,
      payload : order,
    };
    expect(orderFormActions.placeOrder(order)).toEqual(expected);
  });

  it('should create an action to toggle the Buy/Sell selection in order form form tab', () => {
    const expected = {
      type: ActionTypes.TOGGLE_BUY_SELL_ORDER_FORM,
    };
    expect(orderFormActions.toggleBuySellOrderForm()).toEqual(expected);
  });

});
