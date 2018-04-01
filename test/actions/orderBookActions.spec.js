import * as ActionTypes from '../../src/constants/actionTypes';
import * as orderBookActions from '../../src/actions/orderBookActions';

describe('orderBookActions', () => {

  it('should create an action to update the order book', () => {
    let order = {"price": 6.35, "volume": 1681};
    const expected = {
      type: ActionTypes.UPDATE_ORDER_BOOK,
      payload : order,
    };

    expect(orderBookActions.updateOrderBook(order)).toEqual(expected);
  });

});