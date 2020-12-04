import React from "react";
import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Ficha from "../pages/Ficha";
import Route from "./Route";
import Dashboard from "../pages/Dashboard";
import Mesa from "../pages/Mesa";
import CriarMesa from "../pages/CriarMesa";
import Game from "../pages/Game";
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/ficha" component={Ficha} />
      <Route path="/" exact component={Dashboard} isPrivate={true} />
      <Route path="/mesa/:id" component={Mesa} isPrivate={true} />
      <Route path="/criarmesa" component={CriarMesa} /> {/* Colocar com private quando estiver pronta */}
      <Route path="/game/:id" component={Game} isPrivate={true} />
    </Switch>
  );
};

export default Routes;
