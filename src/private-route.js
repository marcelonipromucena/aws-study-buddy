import React, { useEffect } from "react";
import localStorage from "local-storage";
import { Redirect, Route } from "react-router-dom";
import allActions from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector((state) => state.loginReducer.authenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedReduxData = localStorage.get("persist:user");
    if (!persistedReduxData) {
      return;
    }

    const token = persistedReduxData.token;
    
    if (token && token !== '""') {
      dispatch(allActions.loginActions.auth(token));
    }
  }, [authenticated,dispatch]);

  return (
    <Route
      {...rest}
      render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/area-restrita/login" />)}
    />
  );
};

export default PrivateRoute;
