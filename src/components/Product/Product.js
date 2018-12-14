import React from 'react'

const Product = props => {
    return (
        <div className='productContainer'>
            <img src={props.image_url} alt=''></img>
            <h2>{props.name}</h2>
            <h2>Price: {props.price}</h2>
            <button onClick={() => props.openEdit(props.id)}>Edit</button>
            <button onClick={() => props.deleteProduct(props.id)}>Delete</button>

        </div>
    )
}

export default Product