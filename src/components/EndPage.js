import React, { useContext } from "react";
import { QuizContext } from "../context/Context";
// import questions
import { collectionOfQuestions } from "../data/data";
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
  // enable useHistory()
  let history = useHistory();
  // accessing states from context API
  const {
    score,
    setScore,
    setIndexQuestions,
    playerName,
    setPlayerName,
    questionsSet,
  } = useContext(QuizContext);

  // restart the game
  const restartGame = () => {
    // set score back to 0
    setScore(0);
    // display first question back
    setIndexQuestions(0);
    // go back to questions page
    history.push("/quzoos/questionspage");
  };

  // end the game
  const EndGame = () => {
    // set score back to 0
    setScore(0);
    // display first question back
    setIndexQuestions(0);
    // set player name to empty
    setPlayerName("");
    // go back to homepage
    history.push("/quzoos");
  };
  return (
    <>
      <AppContainer>
        {/*Display player name */}
        <Title2>Congratulations: {playerName && playerName}</Title2>
        <Caption2>Your Marks : </Caption2>
        {/* Display player's mark */}
        <MarkText>
          {score}/
          {collectionOfQuestions[questionsSet].questionsAndAnswer.length}
        </MarkText>
      </AppContainer>
      <div>
        {/* Button to restart the game */}
        <Button1 onClick={restartGame}>
          Try again
          <Icon1 className="fas fa-redo"></Icon1>
        </Button1>
      </div>
      <div>
        {/* Button to end the game */}
        <Button1 onClick={EndGame}>End Game</Button1>
      </div>
    </>
  );
};

export default EndPage;
