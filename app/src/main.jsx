import { createRoot } from 'react-dom/client'
import AdminNavbar from './components/admin-navbar'
import AdminDashboard from './components/admin-dashboard.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <AdminNavbar></AdminNavbar>
    <AdminDashboard/>
    </>
)