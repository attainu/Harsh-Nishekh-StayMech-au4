import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
// import Navbar from "./components/navigation/navigation";
// import Combine from "./components/login/combine";
import Register from "./components/login/register";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Practice from "./components/practice/practice";
// import Contest  from ""

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
        </Switch>
      </Router>
    );
  }
}

export default Routes;
