import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
// AXIOS
import axios from "axios";
import { token, headers, BASE_URL } from "../config/api";
// REDUX
import { authAction } from "../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const isAuth = async () => {
    try {
      if (!isAuthenticated) {
        if (token) {
          const URL = `${BASE_URL}/auth`;
          const { data } = await axios.post(URL, null, { headers });
          if (data.isAllowed) dispatch(authAction());
        }
      }
    } catch ({ message }) {
      console.log(message);
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
