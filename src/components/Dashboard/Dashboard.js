import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios';
import Form from '../Form/Form';
const url = "http://localhost:3001"

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventory: [],
        }

        this.openEdit = this.openEdit.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

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

        deleteProduct (id) {
            axios.delete(`${url}/api/inventory/${id}`)
    }

    render (props) {

        return (
            <div className='dashboard'>
                <div>Dashboard</div>
                {this.state.inventory.map(item => (
                <Product key={item.id}
                id={item.id}
                name={item.name}
                image_url={item.image_url}
                price={item.price}
                openEdit={this.openEdit}
                deleteProduct={this.deleteProduct}/>
                ))}
                {/* <Form product={this.state.product}
                showAddBtn={this.state.showAddBtn}
                showChangesBtn={this.state.showChangesBtn}
                showCancel={this.state.showCancel}
                closeEdit={this.closeEdit}/> */}
            </div>
        )
    }
}