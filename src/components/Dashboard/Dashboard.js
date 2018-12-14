import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios';
const url = "http://localhost:3001"

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.openEdit = this.openEdit.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    openEdit () {

    }

    deleteProduct (id) {
        axios.delete(`${url}/api/inventory/${id}`)
    }

    

    render () {

        return (
            <div>
                <div>Dashboard</div>
                {this.props.inventory.map(item => (
                <Product key={item.id}
                id={item.id}
                name={item.name}
                image_url={item.image_url}
                price={item.price}
                openEdit={this.openEdit}
                deleteProduct={this.deleteProduct}/>
                ))}
            </div>
        )
    }
}