import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "../context/Context";
import { collectionOfQuestions } from "../data/data";
import { Title1, Caption1, Button1, AppContainer } from "../styles/styles";

const Homepage = () => {
  let history = useHistory();

  const { setQuestionsSet } = useContext(QuizContext);

  const ToQuestionPage = (e) => {
    setQuestionsSet(e.target.getAttribute("data-id"));
    history.push("/quzoos/rulespage");
  };

  return (
    <>
      <AppContainer>
        <Title1>QUZOOS</Title1>
        <Caption1>Test your knowledge here !</Caption1>
        <div style={{ margin: "70px" }}>
          {collectionOfQuestions.map((item, index) => (
            <Button1 onClick={ToQuestionPage} key={index} data-id={index}>
              {item.name}
            </Button1>
          ))}
        </div>
      </AppContainer>
    </>
  );
};

export default Homepage;
