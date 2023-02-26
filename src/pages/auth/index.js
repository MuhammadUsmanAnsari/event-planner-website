import Navbar from 'components/header/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import './_auth.scss'

export default function index() {
  return (
    <>
    <Navbar background="bg-dark"/>
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}
