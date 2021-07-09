import React, { useState } from "react";
import Content from "./page";
import { useHistory } from "react-router-dom";
// REDUX
import { logoutAction } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const Menu = ({ title }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [drawer, setDrawer] = useState(false);

  const handleRedirect = (path) => history.push(path);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logoutAction());
  };

  return (
    <Content
      handleRedirect={handleRedirect}
      drawer={drawer}
      setDrawer={setDrawer}
      title={title}
      handleLogout={handleLogout}
    />
  );
};
export default Menu;
