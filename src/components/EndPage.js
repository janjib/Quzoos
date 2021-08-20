import React, { useContext } from "react";
import { QuizContext } from "../context/Context";
import { questionsAndAnswer } from "../data/data";
import { useHistory } from "react-router-dom";
import {
  AppContainer,
  Title2,
  Caption2,
  MarkText,
  Button1,
  Icon1,
} from "../styles/styles";

const EndPage = () => {
  let history = useHistory();
  const { score, setScore, setIndexQuestions, playerName, setPlayerName } =
    useContext(QuizContext);

  const restartGame = () => {
    setScore(0);
    setIndexQuestions(0);
    history.push("/quzoos/questionspage");
  };

  const EndGame = () => {
    setScore(0);
    setIndexQuestions(0);
    setPlayerName("");
    history.push("/quzoos");
  };
  return (
    <>
      <AppContainer>
        <Title2>Congratulations: {playerName && playerName}</Title2>
        <Caption2>Your Marks : </Caption2>
        <MarkText>
          {score}/{questionsAndAnswer.length}
        </MarkText>
      </AppContainer>
      <div>
        <Button1 onClick={restartGame}>
          Try again
          <Icon1 className="fas fa-redo"></Icon1>
        </Button1>
      </div>
      <div>
        <Button1 onClick={EndGame}>End Game</Button1>
      </div>
    </>
  );
};

export default EndPage;
