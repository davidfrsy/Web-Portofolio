import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About-Us/About'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className='container'>
      {/* <Navbar/> */}
      <Header/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
