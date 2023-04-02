import { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Event from "./pages/event";
import CoC from "./pages/coc";
// import Registration from "./pages/Registration/Registration";
import { Toaster } from "react-hot-toast";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Toaster />
        <Switch>
          <Route path='/' component={Event} exact />
          <Route path='/code-of-conduct' component={CoC} exact />
          {/* <Route path="/register" component={Registration} exact /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
