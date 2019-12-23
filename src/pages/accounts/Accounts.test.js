import React from "react";
import { shallow } from "enzyme";
import Accounts from "./Accounts";

describe("Accounts page test case", () => {
  it("should test Accounts Page", () => {
    const wrapper = shallow(<Accounts />);
    expect(wrapper).toMatchSnapshot();
  });
});
