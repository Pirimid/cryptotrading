import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orderFormReducer(state = initialState.orderForm, action) {
    let newState;

    switch (action.type) {
        case types.UPDATE_ORDER_FORM_TAB:
            newState = {
                activeTab: action.payload,
                limitPrice: 0,
                buyAmount: '',
                buySize: (state.isBuy ? 0.00000000 : 0.00)
            };
            newState = objectAssign({}, state, newState);
            break;

        case types.UPDATE_ORDER_FORM_EXCHANGE:
            newState = objectAssign({}, state, { 'exchange': action.payload });
            break;

        case types.UPDATE_ORDER_FORM:
            newState = objectAssign({}, state, action.payload);
            break;

        case types.TOGGLE_BUY_SELL_ORDER_FORM:
            newState = {
                buyAmount: '',
                buySize: (state.isBuy ? 0.00000000 : 0.00),
                isBuy: !state.isBuy
            };
            newState = objectAssign({}, state, newState);
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}
