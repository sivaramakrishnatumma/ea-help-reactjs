import React from "react";
import SearchBar from "./SearchBar";
import { mount } from "enzyme";
import { debounce } from "../../util/debounce";

describe("SearchBar component test case", () => {
  it("should test SearchBar component with default props", () => {
    const props = {
      className: "search-bar",
      placeholder: "Search for Product",
      onKeyPress: jest.fn()
    };
    const keyPressed = jest.fn();
    const wrapper = mount(<SearchBar {...props} />);
    const event = { target: { value: "NewName" } };
    wrapper.find("input").simulate("change", event);
    expect(wrapper).toMatchSnapshot();
  });
});
