import React from "react";
import NavLinks from "./NavLinks";
import { shallow } from "enzyme";

describe("NavLinks component test case", () => {
  it("should test NavLinks component with default props", () => {
    const props = {
      collapseMenu: jest.fn()
    };
    const wrapper = shallow(<NavLinks {...props}></NavLinks>);
    expect(wrapper).toMatchSnapshot();
  });
});
