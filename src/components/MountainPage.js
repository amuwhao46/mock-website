import React from 'react'
import { motion } from "framer-motion"

const backgroundImg = 'https://images.unsplash.com/photo-1669668869489-aa778bf6d594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'

export default function MountainPage() {
  return (
    <motion.div className='text-white'>
      <div className='flex flex-col h-screen bg-cover bg-center bg-fixed bg-no-repeat' style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className='m-auto'>
          <h1 className='text-7xl font-bold text-center'>Planet Earth</h1>
          <h3 className='text-3xl text-center'>Oke Amuwha</h3>
        </div>
      </div>
    </motion.div>
  )
}
