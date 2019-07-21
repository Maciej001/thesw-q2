import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import F from "./formComponents";
import { TEXT } from "./fieldTypes";

const propTypes = {
  questionId: PropTypes.string.isRequired,
  field: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([TEXT]).isRequired
  }).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

class InputField extends PureComponent {
  render() {
    const { questionId, field, value = "", onChange } = this.props;
    const { name, label } = field;
    return (
      <Fragment>
        <F.Label htmlFor={name} data-test="input-label">
          {label}
        </F.Label>
        <F.Input
          id={name}
          name={name}
          value={value}
          onChange={e => onChange({ questionId, name, value: e.target.value })}
          data-test="input-field"
        />
      </Fragment>
    );
  }
}

InputField.propTypes = propTypes;

export default InputField;
