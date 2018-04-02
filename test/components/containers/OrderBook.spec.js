import React from "react";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import {OrderBook} from "../../../src/components/containers/OrderBook";
import ConnectedOrderBook from "../../../src/components/containers/OrderBook";
import initialState from "../../../src/reducers/initialState";

describe("<OrderBook />", () => {
  const actions = {
    updateOrderBook: jest.fn()
  };
  const orderFormActions = {
    updateOrderForm: jest.fn()
  };
  const store = configureMockStore()(initialState);

  it("should match snapshot", () => {
    const component = create(
      <Provider store={store}>
        <ConnectedOrderBook />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call updateOrderForm to activate market tab", () => {
    const wrapper = shallow(
      <OrderBook
        actions={actions}
        orderFormActions={orderFormActions}
        currentPair={initialState.currentPair}
        orderBook={initialState.orderBook}
      />
    );
    wrapper.find('.buy-size').at(0).simulate("click");
    expect(orderFormActions.updateOrderForm).toHaveBeenCalledWith({
        activeTab : 'market',
        isBuy : true,
        buyAmount : initialState.orderBook.active[0].marketSize * initialState.orderBook.active[0].price ,
        buySize : initialState.orderBook.active[0].marketSize,
        exchange : initialState.orderBook.active[0].exchange
      }
    );
  });

  it("should call updateOrderForm to activate limit tab", () => {
    const wrapper = shallow(
      <OrderBook
        actions={actions}
        orderFormActions={orderFormActions}
        currentPair={initialState.currentPair}
        orderBook={initialState.orderBook}
      />
    );
    wrapper.find('.buy-price').at(0).simulate("click");
    expect(orderFormActions.updateOrderForm).toHaveBeenCalledWith({
        activeTab : 'limit',
        isBuy : false,
        limitPrice : initialState.orderBook.active[0].price,
        buyAmount : 0,
        buySize : 0,
        exchange : initialState.orderBook.active[0].exchange
      }
    );
  });

  it("should call updateOrderForm to activate market tab", () => {
    const wrapper = shallow(
      <OrderBook
        actions={actions}
        orderFormActions={orderFormActions}
        currentPair={initialState.currentPair}
        orderBook={initialState.orderBook}
      />
    );
    wrapper.find('.ask-size').at(0).simulate("click");
    expect(orderFormActions.updateOrderForm).toHaveBeenCalledWith({
        activeTab : 'market',
        isBuy : false,
        buyAmount : initialState.orderBook.active[0].marketSize * initialState.orderBook.active[0].price ,
        buySize : initialState.orderBook.active[0].marketSize,
        exchange : initialState.orderBook.active[0].exchange
      }
    );
  });

  it("should call updateOrderForm to activate limit tab", () => {
    const wrapper = shallow(
      <OrderBook
        actions={actions}
        orderFormActions={orderFormActions}
        currentPair={initialState.currentPair}
        orderBook={initialState.orderBook}
      />
    );
    wrapper.find('.ask-price').at(0).simulate("click");
    expect(orderFormActions.updateOrderForm).toHaveBeenCalledWith({
        activeTab : 'limit',
        isBuy : false,
        limitPrice : initialState.orderBook.active[0].price,
        buyAmount : 0,
        buySize : 0,
        exchange : initialState.orderBook.active[0].exchange
      }
    );
  });

});