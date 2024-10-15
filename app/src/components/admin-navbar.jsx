import './navbar.css'

function AdminNavbar(){
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
                <li>Home</li>
                <li>Manage Your Events & Resources</li>
                <li>Create a new event or resource</li>
                <li>Check Demand Forecast</li>
                <li>Admin Chatbot</li>
                <li><a href="/Register">Log Out</a></li>
            </ul>
                </div>
                
            </nav>
    </div>
        
    );

};
export default AdminNavbar;
