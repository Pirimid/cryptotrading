import React from "react";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import NewsSection from "../../../src/components/containers/NewsSection";
import initialState from "../../../src/reducers/initialState";

describe("<NewsSection />", () => {

  const store = configureMockStore()(initialState);

  it("should match snapshot", () => {
    const component = create(
      <Provider store={store}>
        <NewsSection />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

});