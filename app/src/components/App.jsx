import './App.css'
import Navbar from './components/navbar'
import Home from './components/home-container'
import Login from './components/login'
import Map from './components/map'
// import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/map",
      element: <><Navbar /><Map/></>
    },
    // {
    //   path: "/user/:username",
    //   element: <><Navbar /><User /></>
    // },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App