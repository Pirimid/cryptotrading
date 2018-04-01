import React from "react";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import {Header} from "../../../src/components/containers/Header";
import ConnectedHeader from "../../../src/components/containers/Header";
import initialState from "../../../src/reducers/initialState";

describe("<Header />", () => {
  const actions = {
    updateCurrencyPair: jest.fn()
  };
  const store = configureMockStore()(initialState);

  it("should match snapshot", () => {
    const component = create(
      <Provider store={store}>
        <ConnectedHeader />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should call updateCurrencyPair with selected pair", () => {
    const wrapper = shallow(
      <Header
        actions={actions}
        currentPair={initialState.currentPair}
        appData={initialState.appData}
      />
    );

    wrapper.find('li').first().simulate("click");
    expect(actions.updateCurrencyPair).toHaveBeenCalledWith(
      initialState.appData.availablePairs.pairCategory1[0]
    );
    
  });

});