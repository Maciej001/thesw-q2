import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import F from "./formComponents";
import Dropdown from "./Dropdown";
import InputField from "./InputField";
import { TEXT, DROPDOWN } from "./fieldTypes";

const propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.oneOf([TEXT]).isRequired
        }),
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(PropTypes.string).isRequired,
          type: PropTypes.oneOf([DROPDOWN]).isRequired
        })
      ])
    )
  }).isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

class Question extends PureComponent {
  renderField = field => {
    const { id, values, onChange } = this.props;
    switch (field.type) {
      case DROPDOWN:
        return (
          <Dropdown
            questionId={id}
            field={field}
            value={values[field.name]}
            onChange={onChange}
          />
        );
      default:
        return (
          <InputField
            questionId={id}
            field={field}
            value={values[field.name]}
            onChange={onChange}
          />
        );
    }
  };

  render() {
    const { title, fields } = this.props.question;
    return (
      <F.Question data-test="question-component">
        <F.QuestionHeader>{title}</F.QuestionHeader>
        {fields.map(field => (
          <Fragment key={field.name}>{this.renderField(field)}</Fragment>
        ))}
      </F.Question>
    );
  }
}

Question.propTypes = propTypes;

export default Question;
