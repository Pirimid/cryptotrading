import React from "react";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import {OrderForm} from "../../../src/components/containers/OrderForm";
import ConnectedOrderForm from "../../../src/components/containers/OrderForm";
import initialState from "../../../src/reducers/initialState";

describe("<OrderForm />", () => {
  const actions = {
    updateOrderFormTab: jest.fn()
  };
  const store = configureMockStore()(initialState);

  it("should match snapshot", () => {
    const component = create(
      <Provider store={store}>
        <ConnectedOrderForm />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should call updateOrderFormTab with selected tab", () => {
    const wrapper = shallow(
      <OrderForm
        actions={actions}
        orderForm={initialState.orderForm}
        currentPair={initialState.currentPair}
        appData={initialState.appData}
      />
    );
    const mockedEvent = { target: { getAttribute : () => { return 'TAB' } } };
    wrapper.find('li[data-tab]').first().simulate("click", mockedEvent);
    expect(actions.updateOrderFormTab).toHaveBeenCalledWith('TAB');
    
  });

});