import * as ActionTypes from '../../src/constants/actionTypes';
import * as HeaderActionCreators from '../../src/actions/headerActions';

describe('headerActions', () => {

  it('should create an action to update the current currency pair', () => {
    let currencyPair = {"last24HourPrice": 6.35, "last24HourVolume": 1681, "lastTradePrice": 1123.01, "unit1": "ETH", "unit2": "USD"};
    const expected = {
      type: ActionTypes.UPDATE_CURRENCY_PAIR,
      payload : currencyPair,
    };
    expect(HeaderActionCreators.updateCurrencyPair(currencyPair)).toEqual(expected);
  });

});