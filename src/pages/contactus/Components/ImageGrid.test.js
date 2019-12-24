import React from "react";
import { mount } from "enzyme";
import ImageGrid from "./ImageGrid";

describe("ImageGrid component test case", () => {
  it("should test ImageGrid component with default props", () => {
    const props = {
      items: [
        {
          id: "test",
          name: "test-name",
          imageUrl: "test-url"
        }
      ],
      onSelect: jest.fn()
    };
    const wrapper = mount(<ImageGrid {...props} />);
    wrapper.find(".product-item").simulate("click");
    expect(props.onSelect).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});
