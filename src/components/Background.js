import React from 'react'
import HelloWorld from './HelloWorld'
import Navbar from './Navbar'

const backgroundImg = 'https://images.unsplash.com/photo-1669920687377-537d98f0d837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
const backgroundImg2 = 'https://images.unsplash.com/photo-1669668869489-aa778bf6d594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export default function Background() {
  return (
    <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(${backgroundImg2})` }}>
      <Navbar />
        <HelloWorld />
    </div>
  )
}
