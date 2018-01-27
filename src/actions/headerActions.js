import * as types from '../constants/actionTypes';

export function updateCurrencyPair(value) {
    if(value) {
        return {
            type: types.UPDATE_CURRENCY_PAIR,
            payload: value
        };
    }

}
