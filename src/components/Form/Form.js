import React, {Component} from 'react'
import axios from 'axios';
const url = "http://localhost:3001"

export default class Form extends Component {
    constructor (props) {
        super (props);

        this.state = {
            urlInput: '',
            nameInput: '',
            priceInput: ''
        }
        this.cancelBtn = this.cancelBtn.bind(this);
        this.handleURL = this.handleURL.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.addToInventory = this.addToInventory.bind(this);
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

    render () {
        return (
            <div className='form'>
            <img></img>
            <p>Image URL:</p>
            <input placeholder='Image URL'
            onChange={(e) => this.handleURL(e)}></input>
            <p>Product Name:</p>
            <input placeholder='Product Name'
            onChange={(e) => this.handleName(e)}></input>
            <p>Price</p>
            <input placeholder='0'
            onChange={(e) => this.handlePrice(e)}></input>
            <button onClick={() => this.cancelBtn()}>Cancel</button>
            <button onClick={() => this.addToInventory()}>Add to Inventory</button>
            </div>
            
        )
    }
}