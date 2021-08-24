import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "../context/Context";
// import questions
import { collectionOfQuestions } from "../data/data";
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
  // enable useHistory()
  let history = useHistory();
  // variable to store error message
  const errorMessage = "Please select an answer";
  // set answer selected by player
  const [answerChosen, setAnswerChosen] = useState("");
  // control error
  const [error, setError] = useState({ isError: false, message: errorMessage });
  // accessing states from context API
  const { score, setScore, indexQuestions, setIndexQuestions, questionsSet } =
    useContext(QuizContext);

  // triggered when player click the answer button
  const selectAnswer = (answer) => {
    // set the answer clicked by player
    setAnswerChosen(answer);
  };

  // triggered when player click the next question button
  const handleNextQuestions = () => {
    // handle if player doesnt select an answer
    if (answerChosen === "") {
      setError({ ...error, isError: true, message: errorMessage });
      return;
    }
    // check the answer chosen is correct or not
    if (
      answerChosen ===
      collectionOfQuestions[questionsSet].questionsAndAnswer[indexQuestions]
        .answer
    ) {
      // if correct, increment the mark
      setScore((prevScore) => prevScore + 1);
    }
    // Move to the next questions
    setIndexQuestions(indexQuestions + 1);
    // reset answer chosen
    setAnswerChosen("");
    // reset error to no error
    setError({ ...error, isError: false, message: errorMessage });
  };

  const handleEndQuiz = () => {
    // handle if player doesnt select an answer
    if (answerChosen === "") {
      setError({ ...error, isError: true, message: errorMessage });
      return;
    }
    // check the answer chosen is correct or not
    if (
      answerChosen ===
      collectionOfQuestions[questionsSet].questionsAndAnswer[indexQuestions]
        .answer
    ) {
      // if correct, increment the mark
      setScore((prevScore) => prevScore + 1);
    }
    // reset error to no error
    setError({ ...error, isError: false, message: errorMessage });
    // Move to final page (all questions has been answered)
    history.push("/quzoos/endpage");
  };

  return (
    <>
      {/* Display Question */}
      <Caption1>
        {
          collectionOfQuestions[questionsSet].questionsAndAnswer[indexQuestions]
            .question
        }
      </Caption1>
      <ButtonChoiceGroup>
        {/* Display All Answers */}
        <Button1 className="" onClick={() => selectAnswer("A")}>
          {
            collectionOfQuestions[questionsSet].questionsAndAnswer[
              indexQuestions
            ].optionA
          }
        </Button1>
        <Button1 className="" onClick={() => selectAnswer("B")}>
          {
            collectionOfQuestions[questionsSet].questionsAndAnswer[
              indexQuestions
            ].optionB
          }
        </Button1>
        <Button1 className="" onClick={() => selectAnswer("C")}>
          {
            collectionOfQuestions[questionsSet].questionsAndAnswer[
              indexQuestions
            ].optionC
          }
        </Button1>
        <Button1 className="" onClick={() => selectAnswer("D")}>
          {
            collectionOfQuestions[questionsSet].questionsAndAnswer[
              indexQuestions
            ].optionD
          }
        </Button1>
      </ButtonChoiceGroup>
      <ButtonAnswerGroup>
        {/* Tell the player to select an answer */}
        {answerChosen !== "" ? (
          <Indicator>
            You choose : <Span1>{answerChosen}</Span1>
          </Indicator>
        ) : (
          <Indicator>{error.message}</Indicator>
        )}

        {/* Determine if last question.If yes, render endgame button. Otherwise, render next question button */}
        {collectionOfQuestions[questionsSet].questionsAndAnswer.length - 1 ===
        indexQuestions ? (
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
