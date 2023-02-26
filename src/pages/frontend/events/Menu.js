import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Menubar() {

  return (
    <>
      <div style={{ height: '100%' }}>
        <ol className="list-group border-0 mx-2 mt-1 sideNavbar" style={{ minHeight: "100vh" }}>
          <li className="list-group-item py-3 bg-dark  px-1  border-0 ">
            <Link to="/" className='btn text-start w-100 text-white'> Home</Link>
            </li>             
          <li className="list-group-item py-3 bg-dark  px-1 border-0">
            <Link to="/see-events" className='btn text-start text-white w-100'> Events</Link>
            </li>
          <li className="list-group-item py-3 bg-dark  px-1 border-0">
            <Link to="/contact" className='btn text-start text-white w-100'> Contact</Link>
            </li>
        </ol>
      </div>
    </>
  )
}
