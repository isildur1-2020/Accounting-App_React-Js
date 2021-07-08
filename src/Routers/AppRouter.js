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
          path="/Supplier"
          component={Supplier}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/Client"
          component={Client}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="Expense"
          component={Expense}
          isAuthenticated={isAuthenticated}
        />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
