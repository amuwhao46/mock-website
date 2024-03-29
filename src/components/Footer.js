import React from 'react'

export default function Footer() {
  return (
    <footer className='flex bg-black text-white pr-5 pt-5 pl-5 pb-12'>
      <div className='mr-6'>
        <h1 className='text-3xl font-bold'>Created by</h1>
        <p className='text-lg'>Oke Amuwha</p>
      </div>
      <div>
        <h1 className='text-3xl font-bold'>Websites</h1>
        <a 
          href='https://okeamuwha.com' 
          rel="noreferrer"
          target="_blank">
          <p className='text-lg hover:text-gray-300 transition'>okeamuwha.com</p>
          </a>
      </div>
    </footer>
  )
}
