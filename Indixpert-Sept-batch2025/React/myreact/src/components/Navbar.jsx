import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
  return (
    <>

      <ul className='nav bg-light py-2 justify-content-around' >
        <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/contact">Contact</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/service">Service</Link></li>
      </ul>
        <Outlet />
    </>
  )
}
