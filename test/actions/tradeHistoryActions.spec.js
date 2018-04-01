import * as ActionTypes from '../../src/constants/actionTypes';
import * as tradeHistoryActions from '../../src/actions/tradeHistoryActions';

describe('tradeHistoryActions', () => {

  it('should create an action to update trade history', () => {
    let trade = {"size": 6, "price": 1681};

    const expected = {
      type: ActionTypes.UPDATE_TRADE_HISTORY,
      payload : trade,
    };

    expect(tradeHistoryActions.updateTradeHistory(currencyPair)).toEqual(expected);
  });

});