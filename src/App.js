import { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Event from "./pages/event";
import AngelConnect from "./pages/angelconnect";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/technohack" component={Event} exact />
          <Route path="/angelconnect" component={AngelConnect} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
