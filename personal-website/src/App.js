import './App.css'
import React from 'react'
import Nav from './components/Nav/Nav.jsx'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About.jsx'
import Photos from './components/Photos/Photos.jsx'
import Home from './components/Home/Home'
import { Route, Link } from 'react-router-dom'


const App = () => {

  return (
    <>

      <Nav />

      <Route path='/' exact>
        <Home />
      </Route>

      <Route path='/portfolio'>
        <Portfolio />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>

      <Route path='/photos'>
        <Photos />
      </Route>

      <Route path='/about'>
        <About />
        </Route>

    </>
  )
}

export default App