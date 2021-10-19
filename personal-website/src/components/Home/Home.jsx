import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h2 id='home-title'>
          "Tell me and I forget. Teach me and I remember. Involve me and I learn."
          <br /> -Benjamin Franklin
        </h2>

          <img src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634584699/Portfolio/About%20Me/IMG_3831_glmb29.jpg" id='about-me-photo' alt="Andrew Saliba" />
          
        <p id='about-info'>
        I am an avid gamer/software engineer with a passion for technology, public speaking, and design. My extensive retail experience has allowed me to thrive in any team-oriented, fast-paced environment,  as well as to adapt to various new challenges. No matter what team I am a part of, my creativity will always shine. 
        </p>

        <a href="https://drive.google.com/file/d/1qBWmniBBHZjcdNRaLjo48dKGT1yysYbS/view?usp=sharing" id='resume-home' target='_blank'><h2>Check out my Resumé here!</h2></a>
        
        <div className="skillphotos">
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653967/Portfolio/Skills/download_itbdal.png" alt="HTML" />
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653967/Portfolio/Skills/cssLogo.4e67641b_voe6xv.png" alt="CSS" />
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653967/Portfolio/Skills/js-logo.838ce517_ozjzj6.png" alt="JS" />
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653967/Portfolio/Skills/react_js_logo.6e086d6c_sutsry.png" alt="REACT" />
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653968/Portfolio/Skills/node_js_logo.67ddd61a_u7lmpf.png" alt="NodeJs" />
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653968/Portfolio/Skills/postgreSqlLogo.53535cdd_u918uu.png" alt="SQL" />
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653967/Portfolio/Skills/mongodb-logo.0ceb38c8_uwjmkp.png" alt="MongoDB" />
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653968/Portfolio/Skills/gitLogo.dcc8b2cb_knnnoj.png" alt="git" />
        <img id='skill-photos' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634653968/Portfolio/Skills/rubyOnRailsLogo.e20d131d_mq6mlv.png" alt="Ruby" />
        
        </div>
      </div>
    </>
  )
}

export default Home
