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
            <div className="Logo">
                <h2>FoodConnect.</h2>
            </div>
            <button className='Hamburger' onClick={handleHamburgerClick}> 
            </button>
            </div>

            <nav>
                <div className='Menu' style={{display:'none'}}>
                <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Login">Login</a></li>
                <li><a href="/Register">Register</a></li>
            </ul>
                </div>
                
            </nav>
    </div>
        
    );

};
export default Navbar;
