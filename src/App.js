import "./App.css";
import Homepage from "./components/Homepage";
import { AppContainer } from "./styles/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RulesPage from "./components/RulesPage";
import QuestionPages from "./components/QuestionPages";
import { useState } from "react";
import { QuizContext } from "./context/Context";
import EndPage from "./components/EndPage";

function App() {
  // setting up state for the context
  // player score
  const [score, setScore] = useState(0);
  // Control current question
  const [indexQuestions, setIndexQuestions] = useState(0);
  // collect player name
  const [playerName, setPlayerName] = useState("");
  // control which question set the player answered
  const [questionsSet, setQuestionsSet] = useState(null);

  return (
    // Providing state to all components
    <QuizContext.Provider
      value={{
        score,
        setScore,
        indexQuestions,
        setIndexQuestions,
        playerName,
        setPlayerName,
        questionsSet,
        setQuestionsSet,
      }}
    >
      <AppContainer>
        <Router>
          <Switch>
            {/* Homepage route */}
            <Route path="/quzoos" exact component={Homepage} />
            {/* RulesPage route */}
            <Route path="/quzoos/rulespage" exact component={RulesPage} />
            {/* Question page route */}
            <Route
              path="/quzoos/questionspage"
              exact
              component={QuestionPages}
            />
            {/* Final page (Player's mark display page) route */}
            <Route path="/quzoos/endpage" exact component={EndPage} />
          </Switch>
        </Router>
      </AppContainer>
    </QuizContext.Provider>
  );
}

export default App;
