import React, { Component } from 'react';
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header'
import './App.css';
const url = "http://localhost:3001"

class App extends Component {
  constructor () {
    super();

    this.state = {
      inventory: []
    }

  }

  componentDidMount () {
    axios.get(`${url}/api/inventory`)
    .then(response => {
      console.log(response.data)
      this.setState({inventory: response.data})
      console.log(this.state.inventory)
      
    })
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
