
import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='container d-flex p-3'>
           <Link to='/dashboard'> <h2>Class Orgnizer</h2></Link>
        </div>
    )
}

export default Header
