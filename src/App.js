import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header'
import routes from './routes';
import './App.css';
const url = "http://localhost:3001"

class App extends Component {
  constructor () {
    super();

    this.state = {
      inventory: [],
      product: {},
      showAddBtn: true,
      showChangesBtn: false,
      showCancel: false
    }

    this.openEdit = this.openEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);

  }

  componentDidMount () {
    axios.get(`${url}/api/inventory`)
    .then(response => {
      this.setState({inventory: response.data})
    })
  }

  componentDidUpdate() {
    axios.get(`${url}/api/inventory`)
    .then(response => {
      this.setState({inventory: response.data})
    })
  }

  openEdit (id, name, url, price) {
    this.setState({product: {id, name, url, price}, showAddBtn: false, showChangesBtn: true, showCancel: true})
  }

  closeEdit () {
    this.setState({showAddBtn: true, showChangesBtn: false, showCancel: false})
  }


  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory}
        openEdit={this.openEdit}/>
        <Form product={this.state.product}
        showAddBtn={this.state.showAddBtn}
        showChangesBtn={this.state.showChangesBtn}
        showCancel={this.state.showCancel}
        closeEdit={this.closeEdit}/>
        {/* {routes} */}
      </div>
      </Router>
        
    );
  }
}

export default App;
