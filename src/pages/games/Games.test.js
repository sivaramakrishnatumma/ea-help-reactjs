import React from "react";
import { shallow } from "enzyme";
import Games from "./Games";

describe("Games page test case", () => {
  it("should test Games Page", () => {
    const wrapper = shallow(<Games />);
    expect(wrapper).toMatchSnapshot();
  });
});
