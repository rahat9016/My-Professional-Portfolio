import React, { useState } from 'react';
import logo from '../../images/logo.png'
import './navbar.css'
const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)
    const handleMenuClick = ()=>{
        setMenuClick(!menuClick)
        console.log(menuClick)
    } 
    return (
        <nav className="nav-container">
            <img width="60px" src={logo}/>
            <div onClick={handleMenuClick} className="menu-bar">
                <i className={menuClick ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={menuClick ? 'active menu' : 'navigation menu'}>
                <li className="menu-item"><a href="#home" className="menu-link">Home</a></li>
                <li className="menu-item"><a href="#skills" className="menu-link">Skills</a></li>
                <li className="menu-item"><a href="#" className="menu-link">Project</a></li>
                <li className="menu-item"><a href="#" className="menu-link">Blog</a></li>
                <li className="menu-item"><a href="#" className="menu-link">CV</a></li>
                <li className="menu-item menu-item-contact"><a href="#" className="menu-link">Contact</a></li>
                
                
            </ul>
            
        </nav>
    );
};

export default Navbar;