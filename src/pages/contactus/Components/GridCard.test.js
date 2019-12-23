import React from "react";
import { mount } from "enzyme";
import GridsCard from "./GridsCard";

describe("GridsCard component test case", () => {
  it("should test GridsCard component with default props", () => {
    const props = {
      items: [
        {
          id: "test",
          name: "test-name",
          imageUrl: "test-url"
        }
      ],
      onSelect: jest.fn(),
      title: "test-title",
      selectedItem: {
        id: "test",
        name: "test-name",
        imageUrl: "test-url"
      }
    };
    const wrapper = mount(<GridsCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
