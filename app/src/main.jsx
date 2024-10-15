import { createRoot } from 'react-dom/client'
import HomeContainer from './components/home-container.jsx'
import './input.css'
import Login from './components/login.jsx'

createRoot(document.getElementById('root')).render(
    <Login/>
)
