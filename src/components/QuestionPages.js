import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "../context/Context";
import { questionsAndAnswer } from "../data/data";
import { GrFormNext } from "react-icons/gr";
import {
  Button1,
  Caption1,
  ButtonChoiceGroup,
  Indicator,
  ButtonAnswerGroup,
  Span1,
  Icon1,
} from "../styles/styles";

const QuestionPages = () => {
  const errorMessage = "Please select an answer";
  let history = useHistory();
  const [answerChosen, setAnswerChosen] = useState("");
  const [error, setError] = useState({ isError: false, message: errorMessage });
  const { score, setScore, indexQuestions, setIndexQuestions } =
    useContext(QuizContext);

  const selectAnswer = (answer) => {
    setAnswerChosen(answer);
  };

  const handleNextQuestions = () => {
    if (answerChosen === "") {
      setError({ ...error, isError: true, message: errorMessage });
      return;
    }
    if (answerChosen === questionsAndAnswer[indexQuestions].answer) {
      setScore((prevScore) => prevScore + 1);
      console.log(score);
    }
    setIndexQuestions(indexQuestions + 1);
    setAnswerChosen("");
    setError({ ...error, isError: false, message: errorMessage });
  };

  const handleEndQuiz = () => {
    if (answerChosen === "") {
      setError({ ...error, isError: true, message: errorMessage });
      return;
    }
    if (answerChosen === questionsAndAnswer[indexQuestions].answer) {
      setScore((prevScore) => prevScore + 1);
      console.log(score);
    }
    setError({ ...error, isError: false, message: errorMessage });
    history.push("/quzoos/endpage");
  };

  return (
    <>
      <Caption1>{questionsAndAnswer[indexQuestions].question}</Caption1>
      <ButtonChoiceGroup>
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
      <ButtonAnswerGroup>
        {answerChosen !== "" ? (
          <Indicator>
            You choose : <Span1>{answerChosen}</Span1>
          </Indicator>
        ) : (
          <Indicator>{error.message}</Indicator>
        )}

        {questionsAndAnswer.length - 1 === indexQuestions ? (
          <Button1 onClick={handleEndQuiz}>End Quiz</Button1>
        ) : (
          <Button1 onClick={handleNextQuestions}>
            Next
            <Icon1 className="fas fa-arrow-right"></Icon1>
          </Button1>
        )}
      </ButtonAnswerGroup>
    </>
  );
};

export default QuestionPages;
