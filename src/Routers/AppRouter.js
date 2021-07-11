import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// COMPONENTS
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// ======================================
import Login from "../Components/Login/index";
import Scheme from "../Components/Scheme/index";
import Supplier from "../Components/Supplier/index";
import Client from "../Components/Client/index";
import Expense from "../Components/Expense/index";
import Edit from "../Components/Edit/index";

export const AppRouter = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={Login}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/scheme"
          component={Scheme}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/supplier"
          component={Supplier}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/client"
          component={Client}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/expense"
          component={Expense}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/edit"
          component={Edit}
          isAuthenticated={isAuthenticated}
        />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
