import React from "react";
import { useHistory } from "react-router-dom";
import { rules } from "../data/data";
import { AppContainer, Button1, Caption1, ListOfRules } from "../styles/styles";

const RulesPage = () => {
  let history = useHistory();

  const goToQuestion = () => {
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

        <div>
          <Button1 onClick={goToQuestion}>Start</Button1>
        </div>
      </AppContainer>
    </>
  );
};

export default RulesPage;
