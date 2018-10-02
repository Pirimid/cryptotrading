import * as ActionTypes from '../../src/constants/actionTypes';
import currentPairReducer from '../../src/reducers/currentPairReducer';

describe('Reducers::currentPairReducer', () => {
  const getInitialState = () => {
    return {
      "last24HourPrice": -6.35,
      "last24HourVolume": 16681,
      "lastTradePrice": 6568.01, 
      "unit1": "BTC", 
      "unit2": "USD"
    };
  };

  const getAppState = () => {
    return {
      "last24HourPrice": 2,
      "last24HourVolume": 2166,
      "lastTradePrice": 2123.01, 
      "unit1": "BTC", 
      "unit2": "GBP"
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(currentPairReducer(undefined, action)).toEqual(expected);
  });

  it('should handle UPDATE_CURRENCY_PAIR', () => {
    let payload = {"last24HourPrice": 6.51, "last24HourVolume": 1681, "lastTradePrice": 5691.52, "unit1": "ETH", "unit2": "USD"};
    const action = { type: ActionTypes.UPDATE_CURRENCY_PAIR, payload, settings: getAppState() };
    const expected = Object.assign(getAppState(), payload);

    expect(currentPairReducer(getAppState(), action)).toEqual(expected);
  });

});