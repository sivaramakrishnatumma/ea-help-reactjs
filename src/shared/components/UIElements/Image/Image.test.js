import React from "react";
import Image from "./Image";
import { mount } from "enzyme";

describe("Image component test case", () => {
  it("should test Image component with default props", () => {
    const props = {
      className: "",
      alt: "submit",
      src: "abc.png"
    };
    const wrapper = mount(<Image {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
