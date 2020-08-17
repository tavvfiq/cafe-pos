import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Report from "./pages/Report";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/report" exact component={Report} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
};
export default App;
