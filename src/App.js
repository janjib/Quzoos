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
  const [score, setScore] = useState(0);
  const [indexQuestions, setIndexQuestions] = useState(0);

  return (
    <QuizContext.Provider
      value={{ score, setScore, indexQuestions, setIndexQuestions }}
    >
      <AppContainer>
        <Router>
          <Switch>
            <Route path="/quzoos" exact component={Homepage} />
            <Route path="/quzoos/rulespage" exact component={RulesPage} />
            <Route
              path="/quzoos/questionspage"
              exact
              component={QuestionPages}
            />
            <Route path="/quzoos/endpage" exact component={EndPage} />
          </Switch>
        </Router>
      </AppContainer>
    </QuizContext.Provider>
  );
}

export default App;
