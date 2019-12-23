import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home page test case", () => {
  it("should test Home Page", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
