import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  redirectPath,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Redirect to={redirectPath} /> : <Component {...props} />
      }
    />
  );
};
export default PublicRoute;
