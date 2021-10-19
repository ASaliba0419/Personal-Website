import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
      <div className="nav-bar">

        <div className="portfolio-nav">
          <Link to='/portfolio'>
            <p>Portfolio</p>
          </Link>
        </div>

        <div className='title-nav'>
          <Link to='/'>
            <h1>Andrew Saliba</h1>
          </Link>
        </div>

        <div className="contact-nav">
          <Link to='/contact'>
            <p>Contact</p>
          </Link>
        </div>

      </div>

    </>
  )
}

export default Nav
