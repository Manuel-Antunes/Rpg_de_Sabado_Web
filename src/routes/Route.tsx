/* eslint-disable no-console */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { store } from '../tsstore';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  console.log(store.getState());
  const { signed } = store.getState().auth.data;
  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
