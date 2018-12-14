import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header'
import routes from './routes';
import './App.css';
const url = "http://localhost:3001"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        {routes}
      </div>
      </Router>
        
    );
  }
}

export default App;
