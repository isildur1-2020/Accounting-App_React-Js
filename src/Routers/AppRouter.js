import axios from "axios";
import { BASE_URL } from "../config/api";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { exchanceRate } from "../redux/actions/exchangeRate";
import { HashRouter, Switch, Redirect } from "react-router-dom";
// COMPONENTS
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
// ================================================
import Login from "../Components/Login/index";
import Signup from "../Components/Signup/index";
import ChangePassword from "../Components/ChangePassword/index";
import DeleteUser from "../Components/DeleteUser/index";
import Home from "../Components/Home/index";
import Scheme from "../Components/Scheme/index";
import SchemeReport from "../Components/SchemeReport/index";
import Supplier from "../Components/Supplier/index";
import SupplierReport from "../Components/SupplierReport/index";
import Client from "../Components/Client/index";
import ClientReport from "../Components/ClientReport/index";
import Expense from "../Components/Expense/index";
import ExpenseReport from "../Components/ExpenseReport/index";
import Catalog from "../Components/Catalog/index";
import CatalogReport from "../Components/CatalogReport/index";
import Earning from "../Components/Earning/index";
import EarningReport from "../Components/EarningReport/index";
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
                    path="/change-password"
                    component={ChangePassword}
                    isAuthenticated={isAuthenticated}
                />
                <PrivateRoute
                    exact
                    path="/delete-user"
                    component={DeleteUser}
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
                    path="/scheme-report"
                    component={SchemeReport}
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
                    path="/supplier-report"
                    component={SupplierReport}
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
                    path="/client-report"
                    component={ClientReport}
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
                    path="/expense-report"
                    component={ExpenseReport}
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
                    path="/catalog-report"
                    component={CatalogReport}
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
                <PrivateRoute
                    exact
                    path="/earning-report"
                    component={EarningReport}
                    isAuthenticated={isAuthenticated}
                />
                <Redirect to="/login" />
            </Switch>
        </HashRouter>
    );
};

export default AppRouter;
