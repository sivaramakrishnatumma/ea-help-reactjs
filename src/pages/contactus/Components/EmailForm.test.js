import { mount } from "enzyme";
import React from "react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import EmailForm from "./EmailForm";

describe("Email Form test case", () => {
  const mockStore = configureMockStore();
  let store = mockStore({});

  it("should test email form", () => {
    const initialState = {
      product: { name: "test-product" },
      platform: { name: "test-platform" },
      topic: { name: "test-topic" },
      issue: { name: "test-issue" }
    };
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <EmailForm></EmailForm>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should test email form input change", () => {
    const initialState = {
      product: { name: "test-product" },
      platform: { name: "test-platform" },
      topic: { name: "test-topic" },
      issue: { name: "test-issue" }
    };
    store = mockStore(initialState);
    const inputHandler = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <EmailForm></EmailForm>
      </Provider>
    );
    const event = { target: { value: "NewName" } };
    wrapper
      .find("input")
      .at(0)
      .simulate("input", event);
    expect(wrapper).toMatchSnapshot();
  });

  it("should test email form submit", () => {
    const props = {
      dispatch: jest.fn()
    };
    const initialState = {
      product: { name: "test-product" },
      platform: { name: "test-platform" },
      topic: { name: "test-topic" },
      issue: { name: "test-issue" }
    };
    store = mockStore(initialState);
    const inputHandler = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <EmailForm {...props}></EmailForm>
      </Provider>
    );
    const event = { preventDefault: jest.fn() };
    wrapper
      .find("form")
      .at(0)
      .simulate("submit", event);
    expect(wrapper).toMatchSnapshot();
  });
});
