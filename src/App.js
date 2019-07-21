import React from "react";

import "./App.css";
import { AppContainer } from "./components";
import formSchema from "./form/formSchema";
import Form from "./form/Form";

function App() {
  const hasQuestions =
    formSchema && formSchema.questions && !!formSchema.questions.length;

  return (
    <AppContainer>
      {hasQuestions && <Form schema={formSchema} data-test="form-component" />}
    </AppContainer>
  );
}

export default App;
