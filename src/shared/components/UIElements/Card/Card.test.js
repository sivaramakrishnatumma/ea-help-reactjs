import React from "react";
import Card from "./Card";
import { mount } from "enzyme";

describe("Card component test case", () => {
  it("should test card component with default props", () => {
    const props = {
      className: "my-title",
      title: "Sample Title",
      onClick: jest.fn()
    };
    const wrapper = mount(<Card {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
