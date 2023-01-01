import React from 'react'
import HelloWorld from './HelloWorld'

const img = 'https://images.unsplash.com/photo-1511205889995-e2a998743716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

export default function Background() {
  return (
    <div className='bg-green-500' src={{img}}>
        <HelloWorld />
    </div>
  )
}
