import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
       
            <nav className='main-nav'>

           
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Products'>Products</NavLink>
            </nav>
        </div>
    )
}
export default Navbar
