import React from "react";
import { mount } from "enzyme";
import SelectedItem from "./SelectedItem";

describe("SelectedItem component test case", () => {
  it("should test SelectedItem component with default props", () => {
    const props = {
      name: "test name",
      imageUrl: "test-url",
      type: "test",
      onChange: jest.fn()
    };
    const wrapper = mount(<SelectedItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
