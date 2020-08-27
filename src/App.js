import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Report from "./pages/Report";
import Register from "./pages/Register";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Home} path="/" exact />
        <PublicRoute restricted={false} component={Login} path="/login" exact />
        <PublicRoute
          restricted={false}
          component={Register}
          path="/register"
          exact
        />
        <PrivateRoute component={Report} path="/report" exact />
      </Switch>
      {/* <Route path="/" exact component={Home} />
      <Route path="/report" exact component={Report} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} /> */}
    </Router>
  );
};
export default App;
