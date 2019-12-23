import React from "react";
import { mount } from "enzyme";
import Breadcrumb from "./Breadcrumb";
import { BrowserRouter } from "react-router-dom";

describe("Breadcrumb component test case", () => {
  it("should test Breadcrumb component with default props", () => {
    const props = {
      items: [{ name: "Home", path: "/" }],
      currentPage: "Case Information"
    };
    const wrapper = mount(
      <BrowserRouter>
        <Breadcrumb {...props} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
