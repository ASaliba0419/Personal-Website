import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <h2 id="contact-header">Please get in contact with me!</h2>

        
        <h3 id='contact-info'>
          Email me at:
          <br />
          SalibaCodes@Gmail.com
        </h3>
        
        <a href="https://www.linkedin.com/in/andrew-saliba-019363213/" target='_blank'>
          <h3 id='contact-info'>
            Connect with me on LinkedIn!
          </h3>
        </a>
      </div>
    </>
  )
}

export default Contact
