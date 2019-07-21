import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";
import { findByTestAttr } from "../test/testUtils";

describe("<Dropdown />", () => {
  let wrapper;
  const initialProps = {
    questionId: "0",
    field: {
      label: "Country",
      name: "country",
      options: ["USA", "Canada"],
      type: "dropdown"
    },
    onChange: () => {},
    value: "Canada"
  };

  beforeEach(() => {
    wrapper = shallow(<Dropdown {...initialProps} />);
  });

  it("renders input field label with correct htmlFor and corresponding id on input field", () => {
    const label = findByTestAttr(wrapper, "dropdown-label");
    const dropdownSelect = findByTestAttr(wrapper, "dropdown-select");
    expect(label.prop("htmlFor")).toEqual(initialProps.field.name);
    expect(dropdownSelect.prop("id")).toEqual(initialProps.field.name);
  });

  it("renders with preselected option", () => {
    const dropdownSelect = findByTestAttr(wrapper, "dropdown-select");
    expect(dropdownSelect.props().value).toEqual(initialProps.value);
  });

  it("renders all available options", () => {
    const options = findByTestAttr(wrapper, "dropdown-option");
    expect(options.length).toBe(initialProps.field.options.length);
  });

  // it("changes selected value on option selection", () => {
  //
  //   const form = mount(<Form />);
  //   dropdownSelect.simulate("change", { target: { value: "Canada" } });
  //   expect(dropdownSelect.props().value).toEqual("USA");
  // });
});
