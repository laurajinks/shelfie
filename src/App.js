import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header'
import './App.css';
import { AsyncSeriesWaterfallHook } from 'tapable';

class App extends Component {
  constructor () {
    super();

    this.state = {
      inventory: [
        {name: 'Sweater', price: '$2000', url: 'image.com'},
        {name: 'Hat', price: '$5', url: 'image.com'},
        {name: 'Shoes', price: '$442', url: 'image.com'}
      ]
    }

  }


  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory}/>
        <Form />
      </div>
    );
  }
}

export default App;
