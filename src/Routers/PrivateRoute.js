import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
// AXIOS
import { axiosInstance } from "../config/api";
// REDUX
import { useDispatch } from "react-redux";
import { authAction } from "../redux/actions/authAction";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const dispatch = useDispatch();

  const isAuth = async () => {
    const token = localStorage.getItem("token");
    if (!isAuthenticated && token) {
      try {
        const { data } = await axiosInstance.post("/auth");
        if (data.isAllowed) dispatch(authAction());
      } catch ({ message }) {
        console.log(message);
      }
    }
  };

  useEffect(() => {
    isAuth();
  }, [isAuthenticated]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.defaultProps = {
  isAuthenticated: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  isAuthenticated: PropTypes.bool,
};

export default PrivateRoute;
