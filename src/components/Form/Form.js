import React, {Component} from 'react'
import axios from 'axios';
const url = "http://localhost:3001"

export default class Form extends Component {
    constructor (props) {
        super (props);

        this.state = {
            urlInput: '',
            nameInput: '',
            priceInput: '',
            showAddBtn: true,
            showChangesBtn: false
        }
        this.cancelBtn = this.cancelBtn.bind(this);
        this.handleURL = this.handleURL.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.addToInventory = this.addToInventory.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    cancelBtn () {
        this.setState({urlInput: '', nameInput: '', priceInput: ''})
    }

    handleURL (e) {
        this.setState({urlInput: e.target.value})
    }

    handleName (e) {
        this.setState({nameInput: e.target.value})
    }

    handlePrice (e) {
        this.setState({priceInput: e.target.value})
    }

    addToInventory (props) {
        axios.post(`${url}/api/product`, {name: this.state.nameInput, price: this.state.priceInput, image_url: this.state.urlInput})
        this.setState({urlInput: '', nameInput: '', priceInput: ''})
    }

    saveChanges () {
        
    }

    render () {
        return (
            <div className='form'>
            <img></img>
            <p>Image URL:</p>
            <input value={this.state.urlInput} placeholder='Image URL'
            onChange={(e) => this.handleURL(e)}></input>
            <p>Product Name:</p>
            <input value={this.state.nameInput} placeholder='Product Name'
            onChange={(e) => this.handleName(e)}></input>
            <p>Price</p>
            <input value={this.state.priceInput} placeholder='0'
            onChange={(e) => this.handlePrice(e)}></input>
            <button onClick={() => this.cancelBtn()}>Cancel</button>
            {this.state.showAddBtn && <button onClick={() => this.addToInventory()}>Add to Inventory</button>}
            {this.state.showChangesBtn && <button onClick={() => this.saveChanges()}>Save Changes</button>}
            </div>
            
        )
    }
}