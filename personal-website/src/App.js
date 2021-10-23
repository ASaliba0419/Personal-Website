import './App.css'
import React from 'react'
import Nav from './components/Nav/Nav.jsx'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'
import { Route } from 'react-router-dom'
// TODO: tab
// COMPLETED: tab

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

    </>
  )
}

export default App