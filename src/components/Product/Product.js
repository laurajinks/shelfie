import React from 'react'

const Product = props => {
    return (
        <div className='productContainer'>
            <img src={props.url}></img>
            <h2>{props.name}</h2>
            <h2>Price: {props.price}</h2>

        </div>
    )
}

export default Product