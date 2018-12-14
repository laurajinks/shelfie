import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => {
    return (

        <div>
            <Link to='/'>Dashboard</Link>
            <Link to='/add'>Add New</Link>
        </div>
    )
}

export default Header;