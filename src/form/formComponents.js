import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
  align-self: flex-start;
  max-width: 400px;
  padding: 30px;
  border: 1px solid navajowhite;
  border-radius: 5px;
  background: white;
`;

const Question = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const QuestionHeader = styled.legend`
  font-size: 18px;
  font-weight: bold;
  color: sienna;
  margin: 0 0 12px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: salmon;
  border: 0;
  outline: 0;
  border-radius: 3px;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

const Label = styled.label`
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: peru;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  line-height: 3;
  padding: 0 10px;
  border: 1px solid navajowhite;
  border-radius: 3px;
  margin-bottom: 15px;
  &:focus,
  &:active {
    border: 1px solid sienna;
  }
`;
const SelectionList = styled.div``;

export default {
  Container,
  Question,
  QuestionHeader,
  Label,
  Input,
  SelectionList,
  Button
};
