import { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Event from './pages/event';

export default class App extends Component {  
  render(){
    return(
      
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/hackathon">
            <Event/>
          </Route>
        </Switch>
      </Router>
    );
  }
};
