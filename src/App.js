import { Component,Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Event from "./pages/event";
import CoC from "./pages/coc";
import Registration from "./pages/Registration/Registration";
// import {Event,CoC,Registration} from './pages/index'
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
export default class App extends Component {
  render() {
    return (
      <Suspense fallback={Loader}>
      <BrowserRouter>
        <Toaster />
        <Switch>
          <Route path="/" component={Event} exact />
          <Route path="/code-of-conduct" component={CoC} exact />
          <Route path="/register" component={Registration} exact />
        </Switch>
      </BrowserRouter>
      </Suspense>
    );
  }
}
