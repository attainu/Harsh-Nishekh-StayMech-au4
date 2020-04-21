import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
// import Navbar from "./components/navigation/navigation";
// import Combine from "./components/login/combine";
import Register from "./components/login/register";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Practice from "./components/practice/practice";
import Profile from "./components/profile/profile";
import PracticeContent from "./components/practice/practice-content";
import Play from "./components/quiz/play";
import QuizSummary from "./components/quiz/quizSummary";
import QuizInstructions from "./components/quiz/quizInstruction";

class Routes extends React.Component {
  // creating router for nav bar
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/practice" component={Practice} />
          <Route path="/profile" component={Profile} />
          <Route path="/content/:topic" component={PracticeContent} />
          <Route path="/instructions" component={QuizInstructions} />
          <Route path="/quiz" component={Play} />
          <Route path="/summary" exact component={QuizSummary} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
