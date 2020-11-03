import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Ficha from './pages/Ficha';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/ficha" component={Ficha} />
    </Switch>
  );
};

export default Routes;
