import React from 'react'
import Intro from '../components/Intro'
import Left from '../components/Left'

export default function Home() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
        <Left/>
        <Intro/>
    </div>
  )
}
