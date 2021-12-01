import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
    return (
        <>
        <ul  className="nav-item">
                <li className="li-item" style={{paddingRight:"30px" }} >
                    <NavLink to="/"  ><p className="link-item">Home</p></NavLink>
                    </li>
                    <li className="li-item" style={{paddingRight:"30px"}} >
                    <NavLink to="/about" >About</NavLink>
                    </li>
                    <li className="li-item" style={{paddingRight:"30px"}} >
                    <NavLink to="/contact" >Contact</NavLink>
                    </li>
                    <li className="li-item" style={{paddingRight:"30px"}} >
                    <NavLink to="/post" >Post</NavLink>
                </li>
            </ul>
    
        </>
    )
}

export default Navbar
