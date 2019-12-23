import React from "react";
import Button from "./Button";
import { mount } from "enzyme";

describe("Button component test case", () => {
  it("should test button component with default props", () => {
    const props = {
      className: "btn-primary",
      type: "submit",
      onClick: jest.fn()
    };
    const wrapper = mount(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
