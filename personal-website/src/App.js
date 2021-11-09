import './App.css'
import React from 'react'
import Nav from './components/Nav/Nav.jsx'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'
import { Route } from 'react-router-dom'
import Darkmode from 'darkmode-js'
// TODO: tab
// COMPLETED: tab

const App = () => {

  new Darkmode().showWidget()
  const options = {
    bottom: '64px', 
    time: '0.5s',
    mixColor: '#fff', 
    backgroundColor: '#e9d9c3', 
    buttonColorDark: '#100f2c', 
    buttonColorLight: '#fff',
    saveInCookies: false,
    label: '🌓',
    autoMatchOsTheme: true,
  }

  const darkmode = new Darkmode(options);
  darkmode.showWidget();

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