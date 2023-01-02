import React from 'react'
import logo from './items/images/Logo.png'

export default function Navbar() {
  return (
    <nav className='flex-center fixed inset-x-0 z-10 bg-gray-200/10 backdrop-blur p-2'>
        <img src={logo} alt='Logo' width='75' />
    </nav>
  )
}
