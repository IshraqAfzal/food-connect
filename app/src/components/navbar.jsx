// import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar(){
    const handleHamburgerClick = () => {
        const menu = document.querySelector('.Menu');
        const hamburger = document.querySelector('.Hamburger')
        if(menu.style.display == 'none'){
            menu.style.display = 'block';
            hamburger.innerHTML = '&times;'
        }else{
            menu.style.display = 'none';
            hamburger.innerHTML = '&#9776;';
        }
    }
    return (
        
            <div className="container">
            <div className="Header">
            <div className="Logo">FoodConnect</div>
            <button className='Hamburger' onClick={handleHamburgerClick}> 
            </button>
            </div>

            <nav>
                <div className='Menu' style={{display:'none'}}>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/Register">Register</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
            </ul>
                </div>
                
            </nav>
    </div>
        
    );

};
export default Navbar;
