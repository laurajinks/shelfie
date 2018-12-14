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
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidUpdate (prevProps) {
        if(prevProps.id !== this.props.id) {
            console.log(this.props);
            this.setState({urlInput: this.props.image_url, nameInput: this.props.name,
            priceInput: this.state.price})
        }
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

    saveChanges (props) {
        axios.put(`${url}/api/product/${this.props.product.id}`, {name: this.state.nameInput, price: this.state.priceInput, image_url: this.state.urlInput})
        this.setState({urlInput: '', nameInput: '', priceInput: ''})
    }

    render (props) {
        return (
            <div className='form'>
            <img></img>
            <p>Image URL:</p>
            <input defaultValue={this.props.product.url} placeholder='Image URL'
            onChange={(e) => this.handleURL(e)}></input>
            <p>Product Name:</p>
            <input defaultValue={this.props.product.name} placeholder='Product Name'
            onChange={(e) => this.handleName(e)}></input>
            <p>Price</p>
            <input defaultValue={this.props.product.price} placeholder='0'
            onChange={(e) => this.handlePrice(e)}></input>
            {this.props.showCancel && <button onClick={() => {
                this.cancelBtn()
                this.props.closeEdit()}}>Cancel</button>}
            {this.props.showAddBtn && <button onClick={() => this.addToInventory()}>Add to Inventory</button>}
            {this.props.showChangesBtn && <button onClick={() => this.saveChanges()}>Save Changes</button>}
            </div>
            
        )
    }
}