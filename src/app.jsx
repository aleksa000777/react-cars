import React, { Fragment } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "unstated";
import { history } from "./utils";
import { CarsListing, Car } from "./pages";
import { Header, Footer } from "./components";
import "normalize.css";
import "../styles/base/_main.sass"; // Global styles
import "../styles/base/_common.sass"; // Global styles

const App = () => (
  <Fragment>
    <Router history={history}>
      <Fragment>
        <Header />
        <main>
          <Provider>
            <Switch>
              <Route exact path="/" component={CarsListing} />
              <Route exact path="/car/:id" component={Car} />
              <Redirect from="*" to="/" />
            </Switch>
          </Provider>
        </main>
      </Fragment>
    </Router>
    <Footer />
  </Fragment>
);

export default App;
