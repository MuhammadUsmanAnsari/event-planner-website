import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Frontend from 'pages/frontend'
import Auth from 'pages/auth'
// navbar
import Navbar from 'components/header'
import Footer from 'components/footer'
import { useAuthContext } from 'context/AuthContext'
// footer

export default function Index() {
 const {isAuthenticated}=useAuthContext()
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path='/*' element={<Frontend />} />
                    <Route path='/auth/*' element={!isAuthenticated?<Auth />: <Navigate to="/"/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
