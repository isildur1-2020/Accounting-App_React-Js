import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
// COMPONENTS
import Login from "./Components/Login/index";
import Scheme from "./Components/Scheme/index";
import Client from "./Components/Client/index";
import Expense from "./Components/Expense/index";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/scheme" component={Scheme} />
      <Route exact path="/client" component={Client} />
      <Route exact path="/expense" component={Expense} />
      <Redirect to="login" />
    </Switch>
  </BrowserRouter>
);

export default App;
