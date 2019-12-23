import React from "react";
import { mount } from "enzyme";
import Footer from "./Footer";

describe("Footer component test case", () => {
  it("should test footer component with default props", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
