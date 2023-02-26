import React from 'react'
import Navbar from 'components/header/Navbar'
import About from './About'
import Blogs from './Blogs'
import Carousel from './Hero-section'
import './_home.scss'
import Footer from 'components/footer/Footer'

export default function index() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Blogs />
      <Footer/>
    </>
  )
}
