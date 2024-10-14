import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/navbar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <Header></Header>
)
