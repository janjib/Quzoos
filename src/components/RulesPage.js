import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "../context/Context";
// import hard coded rules
import { rules } from "../data/data";
import {
  AppContainer,
  Button1,
  Caption1,
  ListOfRules,
  NameInput,
} from "../styles/styles";

const RulesPage = () => {
  // accessing state from context API
  const { playerName, setPlayerName } = useContext(QuizContext);

  // enable history.push()
  let history = useHistory();

  // get the player's name
  const handleInputChangeName = (e) => {
    setPlayerName(e.target.value);
  };

  // Bring the player to question page
  const goToQuestion = () => {
    // notify if no name entered
    if (playerName === "") {
      alert("Please enter your name");
      return;
    }
    // bring the player to the question page
    history.push("/quzoos/questionspage");
  };
  return (
    <>
      <AppContainer>
        <Caption1>Rules</Caption1>
        <ol style={{ margin: "60px" }}>
          {/* List of rules */}
          {rules.map((item, index) => (
            <ListOfRules key={index}>{item}</ListOfRules>
          ))}
        </ol>
        {/* Input for name */}
        <NameInput
          type="text"
          placeholder="Enter your name : "
          onChange={handleInputChangeName}
        />
        <div>
          {/* Button to submit name and go to next page */}
          <Button1 onClick={goToQuestion}>Start</Button1>
        </div>
      </AppContainer>
    </>
  );
};

export default RulesPage;
