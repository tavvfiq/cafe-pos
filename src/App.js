import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Report from "./pages/Report";
import Register from "./pages/Register";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import { useSelector } from "react-redux";

const App = () => {
  const { isLoggedIn, session } = useSelector((state) => state.authState);
  return (
    <Router>
      <Switch>
        <PrivateRoute
          component={Home}
          isLoggedIn={isLoggedIn}
          level_id={session.level_id}
          redirectPath="/login"
          exact
          path="/"
        />
        <PublicRoute
          redirectPath="/"
          component={Login}
          isLoggedIn={isLoggedIn}
          exact
          path="/login"
        />
        <PublicRoute
          redirectPath="/"
          component={Register}
          isLoggedIn={isLoggedIn}
          exact
          path="/register"
        />
        <PrivateRoute
          component={Report}
          isLoggedIn={isLoggedIn}
          level_id={session.level_id}
          redirectPath="/"
          exact
          path="/report"
        />
      </Switch>
    </Router>
  );
};
export default App;
