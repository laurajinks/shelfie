import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    

    render () {

        return (
            <div>
                <div>Dashboard</div>
                {this.props.inventory.map(item => (
                <Product name={item.name}
                url={item.url}
                price={item.price}/>
                ))}
            </div>
        )
    }
}