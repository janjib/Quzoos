import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "../context/Context";
import { questionsAndAnswer } from "../data/data";
import {
  AppContainer,
  Button1,
  Caption1,
  ButtonChoiceGroup,
} from "../styles/styles";

const QuestionPages = () => {
  let history = useHistory();
  const [answerChosen, setAnswerChosen] = useState("");

  const { score, setScore, indexQuestions, setIndexQuestions } =
    useContext(QuizContext);

  const selectAnswer = (answer) => {
    setAnswerChosen(answer);
    // if (answerChosen === questionsAndAnswer[indexQuestions].answer) {
    //   setScore(score + 1);
    // }
  };

  const handleNextQuestions = () => {
    if (answerChosen === questionsAndAnswer[indexQuestions].answer) {
      setScore(score + 1);
      console.log(score);
    }
    setIndexQuestions(indexQuestions + 1);
  };

  const handleEndQuiz = () => {
    if (answerChosen === questionsAndAnswer[indexQuestions].answer) {
      setScore(score + 1);
      console.log(score);
    }
    history.push("/quzoos/endpage");
  };

  return (
    <>
      <ButtonChoiceGroup>
        <Caption1>{questionsAndAnswer[indexQuestions].question}</Caption1>
        <Button1 className="" onClick={() => selectAnswer("A")}>
          {questionsAndAnswer[indexQuestions].optionA}
        </Button1>
        <Button1 className="" onClick={() => selectAnswer("B")}>
          {questionsAndAnswer[indexQuestions].optionB}
        </Button1>
        <Button1 className="" onClick={() => selectAnswer("C")}>
          {questionsAndAnswer[indexQuestions].optionC}
        </Button1>
        <Button1 className="" onClick={() => selectAnswer("D")}>
          {questionsAndAnswer[indexQuestions].optionD}
        </Button1>
      </ButtonChoiceGroup>
      <div>
        {questionsAndAnswer.length - 1 === indexQuestions ? (
          <Button1 onClick={handleEndQuiz}>End Quiz</Button1>
        ) : (
          <Button1 onClick={handleNextQuestions}>Next</Button1>
        )}
      </div>
    </>
  );
};

export default QuestionPages;
