import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar.jsx'
import Login from './components/login.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <Navbar/>
    <Login/>
    </>
)