import React from "react";
import NavBar from "./NavBar";
import { shallow } from "enzyme";

describe("NavBar component test case", () => {
  it("should test NavBar component with default props", () => {
    const showMenuConent = jest.fn();
    const wrapper = shallow(<NavBar />);
    wrapper.find(".navbar-toggler").simulate("click");
    // expect(showMenuConent).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});
