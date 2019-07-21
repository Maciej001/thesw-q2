import React from "react";
import { shallow, mount } from "enzyme";
import Form from "./Form";
import formSchema from "./formSchema";

import { findByTestAttr } from "../test/testUtils";

describe("<Form />", () => {
  const initialState = {
    questions: {
      0: {
        email: "",
        first_name: "",
        last_name: "",
        phone_number: ""
      },
      1: {
        country: "Canada",
        post_code: "",
        street_address: ""
      }
    }
  };

  it("sets up state correctly", () => {
    const wrapper = shallow(<Form schema={formSchema} />);
    expect(wrapper.state()).toEqual(initialState);
  });

  it("onChange() updates <Dropdown /> selected option", () => {
    const wrapper = mount(<Form schema={formSchema} />);
    const newCountry = "USA";

    wrapper.instance().onChange({
      questionId: "1",
      name: "country",
      value: newCountry
    });

    wrapper.update();
    const dropdown = findByTestAttr(wrapper, "dropdown-select");
    expect(dropdown.props().value).toEqual(newCountry);
  });

  it("onChange() updates <InputField /> value", () => {
    const wrapper = mount(<Form schema={formSchema} />);
    const newName = "Maciej";

    wrapper.instance().onChange({
      questionId: "0",
      name: "first_name",
      value: newName
    });

    wrapper.update();

    const inputField = wrapper.find(`[value="${newName}"]`).hostNodes();
    expect(inputField.props().value).toEqual(newName);
  });

  it("renders correct number of <Question /> components", () => {
    const wrapper = mount(<Form schema={formSchema} />);
    const questions = findByTestAttr(wrapper, "question-component").hostNodes();

    expect(questions.length).toBe(2);
  });
});
