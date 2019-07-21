import React from "react";
import { shallow } from "enzyme";
import InputField from "./InputField";
import { findByTestAttr } from "../test/testUtils";

describe("<InputField />", () => {
  let wrapper;
  const initialProps = {
    questionId: "0",
    field: {
      label: "First name",
      name: "first_name",
      type: "text"
    },
    onChange: () => {}
  };

  beforeEach(() => {
    wrapper = shallow(<InputField {...initialProps} />);
  });

  it("renders input field label with correct htmlFor and corresponding id on input field", () => {
    const label = findByTestAttr(wrapper, "input-label");
    const inputField = findByTestAttr(wrapper, "input-field");
    expect(label.prop("htmlFor")).toEqual(initialProps.field.name);
    expect(inputField.prop("id")).toEqual(initialProps.field.name);
  });
});
