import React from "react";
import { useHistory } from "react-router-dom";
import { Title1, Caption1, Button1, AppContainer } from "../styles/styles";

const Homepage = () => {
  let history = useHistory();

  const ToQuestionPage = () => {
    history.push("/quzoos/rulespage");
  };

  return (
    <>
      <AppContainer>
        <Title1>QUZOOS</Title1>
        <Caption1>Test your knowledge here !</Caption1>
        <div style={{ margin: "70px" }}>
          <Button1 onClick={ToQuestionPage}>Reasoning Test</Button1>
        </div>
      </AppContainer>
    </>
  );
};

export default Homepage;
