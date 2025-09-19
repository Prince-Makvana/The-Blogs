import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>   
      <nav className='bg-gray-400 flex justify-between p-5'>
        <h1 className='text-4xl text-white font-bold'>The Blog</h1>
        <div className='links me-5 mt-2'>
          <Link className='me-5 font-bold text-white' to="/">Home</Link>
          <Link className='me-5 font-bold text-white' to="/create">New Blog</Link>
        </div>
      </nav>
      <Outlet />
    </>

  )
}

export default Navbar
