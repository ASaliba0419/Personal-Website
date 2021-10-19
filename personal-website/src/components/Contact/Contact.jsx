import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <h2 id="contact-header">Please get in contact with me!</h2>

        <a href="mailto:SalibaCodes@Gmail.com" target="_blank" rel="noopener noreferrer">
          <h3 id='contact-info'>
            Email Me!
          </h3>
        </a>

        <a href="https://www.linkedin.com/in/andrew-saliba-019363213/" target='_blank'>
          <h3 id='contact-info'>
            Connect with me on LinkedIn!
          </h3>
        </a>

        <a href="https://github.com/ASaliba0419" target='_blank'>
          <h3 id='contact-info'>
            Follow me on GitHub!
          </h3>
        </a>


      </div>
    </>
  )
}

export default Contact
