import React from 'react'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import AyushmanInfo from '../components/AyushmanInfo'
import Services from '../components/Services'

const HomePages = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Services/>
        <AyushmanInfo/>
        <Contact/>
    </div>
  )
}

export default HomePages