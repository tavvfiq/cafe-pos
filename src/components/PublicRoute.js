import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

const PublicRoute = ({ component: Component, restricted, isLoggedIn, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && restricted ? (
          <Redirect to="/report" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
