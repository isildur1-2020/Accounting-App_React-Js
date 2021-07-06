import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
// COMPONENTS
import Login from "./Components/Login/index";
import Scheme from "./Components/Scheme/index";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/scheme" component={Scheme} />
      <Redirect to="login" />
    </Switch>
  </BrowserRouter>
);

export default App;
