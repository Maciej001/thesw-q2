import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import F from "./formComponents";
import { DROPDOWN } from "./fieldTypes";

const propTypes = {
  questionId: PropTypes.string.isRequired,
  field: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.oneOf([DROPDOWN]).isRequired
  }).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

class Dropdown extends PureComponent {
  render() {
    const { field, questionId, value, onChange } = this.props;
    const { name, label, options } = field;
    return (
      <Fragment>
        <F.Label htmlFor={name} data-test="dropdown-label">
          {label}
        </F.Label>
        <select
          id={name}
          value={value}
          onChange={e => onChange({ questionId, name, value: e.target.value })}
          data-test="dropdown-select"
        >
          {options.map((option, index) => (
            <option key={index} value={option} data-test="dropdown-option">
              {option}
            </option>
          ))}
        </select>
      </Fragment>
    );
  }
}

Dropdown.propTypes = propTypes;

export default Dropdown;
