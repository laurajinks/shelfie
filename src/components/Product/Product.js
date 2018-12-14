import React from 'react'
import {Link} from 'react-router-dom'

const Product = props => {
    return (
        <div className='productContainer'>
            <img src={props.image_url} alt=''></img>
            <h2>{props.name}</h2>
            <h2>Price: {props.price}</h2>
            <Link to='/form'><button onClick={() => props.openEdit(props.id, props.name, props.image_url, props.price)}>Edit</button></Link>
            <button onClick={() => props.deleteProduct(props.id)}>Delete</button>

        </div>
    )
}

export default Product