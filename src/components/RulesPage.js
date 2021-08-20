import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "../context/Context";
import { rules } from "../data/data";
import {
  AppContainer,
  Button1,
  Caption1,
  ListOfRules,
  NameInput,
} from "../styles/styles";

const RulesPage = () => {
  const { playerName, setPlayerName } = useContext(QuizContext);

  const handleInputChangeName = (e) => {
    setPlayerName(e.target.value);
  };

  let history = useHistory();
  const goToQuestion = () => {
    if (playerName === "") {
      alert("Please enter your name");
      return;
    }

    history.push("/quzoos/questionspage");
  };
  return (
    <>
      <AppContainer>
        <Caption1>Rules</Caption1>
        <ol style={{ margin: "60px" }}>
          {rules.map((item, index) => (
            <ListOfRules key={index}>{item}</ListOfRules>
          ))}
        </ol>
        <NameInput
          type="text"
          placeholder="Enter your name : "
          onChange={handleInputChangeName}
        />
        <div>
          <Button1 onClick={goToQuestion}>Start</Button1>
        </div>
      </AppContainer>
    </>
  );
};

export default RulesPage;
