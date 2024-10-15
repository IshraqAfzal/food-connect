import { createRoot } from 'react-dom/client'
import AdminNavbar from './components/admin-navbar'
import Chatbot from './components/admin-chatbot.jsx'
import CreateEvent from './components/admin-create-event'


createRoot(document.getElementById('root')).render(
    <>
    <AdminNavbar/>
    <CreateEvent/>
    </>
)