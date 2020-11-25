import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLogin, component: Component, ...rest }) => {
  return (
    <Switch>
      <Route
        {...rest}
        render={(props) => {
          return isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }}
      />
    </Switch>
  );
};

export default ProtectedRoute;
