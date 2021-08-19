import React, { useEffect, useCallback } from "react";
import { HashRouter, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { exchanceRate } from "../redux/actions/exchangeRate";
import axios from "axios";
import { BASE_URL } from "../config/api";
// COMPONENTS
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// ================================================
import Login from "../Components/Login/index";
import Signup from "../Components/Signup/index";
import Home from "../Components/Home/index";
import Scheme from "../Components/Scheme/index";
import Supplier from "../Components/Supplier/index";
import Client from "../Components/Client/index";
import Expense from "../Components/Expense/index";
import Catalog from "../Components/Catalog/index";
import Earning from "../Components/Earning/index";
import Edit from "../Components/Edit/index";

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);

    const getExchanceRate = useCallback(async () => {
        try {
            const URL = `${BASE_URL}/convert`;
            const { data } = await axios.get(URL);
            const { convert } = data;
            dispatch(exchanceRate(convert.toFixed(4)));
        } catch ({ message }) {
            console.log(message);
        }
    });

    useEffect(() => {
        getExchanceRate();
    }, []);

    return (
        <HashRouter>
            <Switch>
                <PublicRoute
                    exact
                    path="/login"
                    component={Login}
                    isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                    exact
                    path="/signup"
                    component={Signup}
                    isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                    exact
                    path="/home"
                    component={Home}
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
                    path="/catalog"
                    component={Catalog}
                    isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                    exact
                    path="/edit"
                    component={Edit}
                    isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                    exact
                    path="/earning"
                    component={Earning}
                    isAuthenticated={isAuthenticated}
                />
                <Redirect to="/login" />
            </Switch>
        </HashRouter>
    );
};

export default AppRouter;
