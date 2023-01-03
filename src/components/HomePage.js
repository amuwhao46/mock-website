import React from 'react'

const backgroundImg = 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export default function HomePage() {
  return (
    <div className='text-white'>
      <div className='flex flex-col h-screen bg-cover bg-center bg-fixed bg-no-repeat' style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className='m-auto'>
          <h1 className='text-7xl font-bold text-center'>Planet Earth</h1>
          <h3 className='text-3xl text-center'>Oke Amuwha</h3>
        </div>
      </div>
    </div>
  )
}
