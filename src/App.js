import { Component } from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import './App.css';

import Home from "./pages/home";
import Event from "./pages/event";

export default class App extends Component {  
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/technohack" component={Event} exact />
      </Switch>
    </BrowserRouter>
    );
  }
}
