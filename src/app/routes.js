import React from "react";
import { Route, Switch } from "react-router-dom";
import loadCounter from "bundle-loader?lazy!./features/Counter"; // eslint-disable-line import/no-webpack-loader-syntax
import { Helmet } from "react-helmet";
import App from "./App";

import HomeView from "./features/Home";
import NotFoundView from "./components/NotFound";
import Bundle from "./utils/Bundle";

// components load their module for initial visit

export default (
  <App>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route
        path="/counter"
        children={(props) => (
          <div>
            <Helmet><title>CounterView</title></Helmet>
            <Bundle load={loadCounter}>
              {({ CounterView }) => <CounterView {...props} />}
            </Bundle>
          </div>
        )}
      />

      <Route path="/404" component={NotFoundView} />
      <Route component={NotFoundView} />
    </Switch>
  </App>
);
