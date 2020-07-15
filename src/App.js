// Packages
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// Component
import Books from "./containers/Books/Books.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Books} />
        <Books />
      </Switch>
    </Router>
  );
};

export default App;
