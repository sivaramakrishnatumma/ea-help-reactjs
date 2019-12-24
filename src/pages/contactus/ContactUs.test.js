import { mount, shallow } from "enzyme";
import React from "react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ContactUs from "./ContactUs";
import { BrowserRouter } from "react-router-dom";

describe("Contact US test case", () => {
  const mockStore = configureMockStore();
  let store = mockStore({});
  const initialState = {
    products: [],
    platforms: [],
    topics: [],
    issues: [],
    product: null,
    platform: null,
    topic: null,
    issue: null
  };

  it("should test contact us page with default values", () => {
    store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <ContactUs></ContactUs>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should test email success alert close", () => {
    const state = { ...initialState, isEmailSent: true };
    store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ContactUs></ContactUs>
        </BrowserRouter>
      </Provider>
    );

    wrapper
      .find(".close")
      .at(0)
      .simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  it("should test products filter on search input change", () => {
    const state = { ...initialState, isEmailSent: true };
    store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ContactUs></ContactUs>
        </BrowserRouter>
      </Provider>
    );
    const event = { target: { name: "nfs" } };
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find(".searchbar-input")
      .at(0)
      .simulate("change", event);
  });

  it("should test contact us page with product and platforms", () => {
    const state = { ...initialState, product: {}, platforms: [] };
    store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ContactUs></ContactUs>
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
