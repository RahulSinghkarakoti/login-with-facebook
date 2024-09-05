import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-zinc-500  flex justify-between  text-3xl font-semibold p-2'>
      <Link to='/'>
        <h1 className=' '>MOJO asignment</h1>
      </Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Header
