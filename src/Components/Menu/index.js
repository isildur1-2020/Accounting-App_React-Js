import Content from "./page";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// REDUX
import { logoutAction } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Menu = ({ title }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [drawer, setDrawer] = useState(false);
    const { exchangeRate } = useSelector(({ exchangeRate }) => exchangeRate);

    const handleRedirect = (path) => history.push(path);

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        dispatch(logoutAction());
    };

    return (
        <Content
            title={title}
            drawer={drawer}
            setDrawer={setDrawer}
            exchangeRate={exchangeRate}
            handleLogout={handleLogout}
            handleRedirect={handleRedirect}
        />
    );
};
export default Menu;
