// import React from 'react'
import './navbar.css'

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
            <button className='Hamburger' onClick={handleHamburgerClick}>&#9776;
            </button>
            </div>

            <nav>
                <div className='Menu' style={{display:'none'}}>
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>

            </ul>
                </div>
                
            </nav>
    </div>
        
    );

};
export default Navbar;
