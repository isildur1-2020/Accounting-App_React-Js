import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

PublicRoute.defaultProps = {
  isAuthenticated: false,
};

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  isAuthenticated: PropTypes.bool,
};

export default PublicRoute;
