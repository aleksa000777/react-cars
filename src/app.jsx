import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "unstated";
import { history } from "./utils";
import { CarsListing, Car } from "./pages";

const App = () => (
  <Provider>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={CarsListing} />
        <Route exact path="/car/:id" component={Car} />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
