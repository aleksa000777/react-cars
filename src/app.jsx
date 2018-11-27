import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { history } from "./utils";
import { CarsListing, Car } from "./containers";

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={CarsListing} />
      <Route path="/car/:id" component={Car} />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default App;
