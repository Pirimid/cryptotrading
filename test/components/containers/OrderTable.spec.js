import React from "react";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import OrderTable from "../../../src/components/containers/OrderTable";
import initialState from "../../../src/reducers/initialState";

describe("<OrderTable />", () => {
  const store = configureMockStore()(initialState);

  it("should match snapshot", () => {
    const component = create(
      <Provider store={store}>
        <OrderTable />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

});