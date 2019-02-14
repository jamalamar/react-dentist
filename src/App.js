import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home/home.js'
import Contact from './Contact/contact.js'
import Procedures from './Procedures/procedures.js'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <nav>
            <Link to="/">Go to Home Page</Link>{' '}
            <Link to="/procedures">See Our Procedures</Link>{' '}
            <Link to="/contact">Contact Us!</Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
      </div>
      </Router>
    );
  }
}

export default App;
