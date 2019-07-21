import React, { Component } from "react";
import F from "./formComponents";
import Question from "./Question";
import { DROPDOWN } from "./fieldTypes";
import { snakeToCamel } from "../utils";

class Form extends Component {
  state = {
    questions: {}
  };

  componentDidMount() {
    const { schema } = this.props;

    const initialValues = schema.questions.reduce(
      (init, question, index) => ({
        ...init,
        [index]: question.fields.reduce(
          (q, field) => ({
            ...q,
            [field.name]: field.type === DROPDOWN ? field.options[0] : ""
          }),
          {}
        )
      }),
      {}
    );

    this.setState({ questions: initialValues });
  }
  onChange = ({ questionId, name, value }) => {
    const { questions } = this.state;
    this.setState({
      questions: {
        ...questions,
        [questionId]: {
          ...questions[questionId],
          [name]: value
        }
      }
    });
  };
  onPrint = e => {
    const { questions } = this.state;

    e.preventDefault();
    let output = {};
    for (let key in questions) {
      output = { ...output, ...questions[key] };
    }

    for (let key in output) {
      console.log(`${snakeToCamel(key)}: ${output[key]}`);
    }
  };

  render() {
    const { schema } = this.props;

    return (
      <F.Container data-test="form-component">
        {schema.questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            values={this.state.questions[index] || {}}
            onChange={this.onChange}
            id={index.toString()}
          />
        ))}
        <F.Button type="text" onClick={this.onPrint}>
          Print
        </F.Button>
      </F.Container>
    );
  }
}

export default Form;
