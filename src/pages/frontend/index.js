import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from 'pages/frontend/home'
import Navbar from 'components/header/Navbar'
import Events from './events/Index'
import SeeEvents from './seeEvents/SeeEvents'
import { useAuthContext } from 'context/AuthContext'

export default function Index() {
const {isAuthenticated}=useAuthContext()
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='events' element={isAuthenticated?<Events />:<Navigate to="/auth/login"/>} />
        <Route path='see-events' element={<SeeEvents />} />
      </Routes>
    </>
  )
}
