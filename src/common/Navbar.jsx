import React from "react";
import "./navbar.css"


const Navbar = () => {


    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li><a className="nav-items" href="#">Home</a></li>
                <li><a className="nav-items" href="#about">Tools</a></li>
                <li><a className="nav-items" href="#portfolio">Blog</a></li>
                <li><a className="nav-items" href="#contact">Shop</a></li>
                <li><a className="nav-items" href="#work">About</a></li>
            </ul>

        </div>
    )
}

export default Navbar;