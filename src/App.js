import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Report from "./pages/Report";
import Register from "./pages/Register";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import {useSelector} from "react-redux";

const App = () => {
  const {isLoggedIn} = useSelector((state)=>state.authState);
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Home} isLoggedIn={isLoggedIn} exact path="/" />
        <PublicRoute restricted={false} component={Login} isLoggedIn={isLoggedIn} exact path="/login" />
        <PublicRoute
          restricted={false}
          component={Register}
          isLoggedIn={isLoggedIn}
          exact
          path="/register"
        />
        <PrivateRoute component={Report} isLoggedIn={isLoggedIn} exact path="/report" />
      </Switch>
    </Router>
  );
};
export default App;
