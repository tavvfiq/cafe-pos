import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Report from "./pages/Report"

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/reports" exact component={Report}/>
    </Router>
  );
};
export default App;