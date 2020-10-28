import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Ficha from './pages/Ficha';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/ficha" component={Ficha} />
    </Switch>
  );
};

export default Routes;
