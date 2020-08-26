import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        rest.isLoggedIn && restricted ? (
          <Redirect to="/report" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = function (state) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
export default connect(mapStateToProps)(PublicRoute);
