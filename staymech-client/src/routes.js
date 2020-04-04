import React from "react";
import {Router,Switch,Route} from "react-router-dom";

import history from "./history";
// import Navbar from "./components/navigation/navigation";
import Combine from "./components/login/combine";
import Home from "./components/home/home";
import Practice from "./components/practice/practice";

class Routes extends React.Component{

    // creating router for nav bar
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Combine} />
                    <Route path="/practice" component={Practice} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;