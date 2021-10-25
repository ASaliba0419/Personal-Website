import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <div className='port-container'>
      <a href="https://github.com/ASaliba0419" target='_blank'>
        <h1 id='port-header'>Projects</h1>
        </a>


        <div className='port-info'>
          <a href="https://asaliba0419.github.io/Slurm-Factory/" target="_blank">
            <p id='port-title'>Futurama API</p>
            <img id='port-pic' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634659662/Portfolio/projects/Screen_Shot_2021-10-19_at_12.04.09_PM_iaonht.png" alt="FuturamaAPI" />
          </a>
          <p id='port-info-text'>
            I did my first project based on the tv show, Futurama. Using this app, the user has the ability to be able to click on a dropdown list and select one of the seven main characters, returning information about that character using an external API.
            <br />
            <br />
          </p>

          <br />
          <br />

          <a href="https://overwatch-characters.netlify.app/" target='_blank'>
            <p id='port-title'>Overwatch API</p>
            <img id='port-pic' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634659662/Portfolio/projects/Screen_Shot_2021-10-19_at_12.05.08_PM_uh6egj.png" alt="OverwatchAPI" />
          </a>
          <p id='port-info-text'>
            For my second project, I've decided to do something along the lines of video games. I went with one of my favorite games Overwatch. In this app you are able to look through characters on a carousel and view info about the character. You are also able to utilize full CRUD on newly created characters. This was made using AirTable.
            <br />
            <br />
          </p>

          <br />
          <br />

          <a href="https://boomroasted.netlify.app/" target='_blank'>
            <p id='port-title'>Boom! Roasted</p>
            <img id='port-pic' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634659662/Portfolio/projects/Screen_Shot_2021-10-19_at_12.06.18_PM_gkxapr.png" alt="Boom!Roasted" />
          </a>
          <p id='port-info-text'>
            The third project on my list was a group project. In this shopping app you are able to shop for coffee from the admin created products. You are also able to use full CRUD so the user can create their own products. There is also authentication used for user log in and signup. This was made using Express and Mongo DB.
            <br />
            <br />
          </p>

          <br />
          <br />

          <a href="https://habibiheart-breaker.netlify.app" target='_blank'>
            <p id='port-title'>Habibi Heart-Breaker</p>
            <img id='port-pic' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1634659662/Portfolio/projects/Screen_Shot_2021-10-19_at_12.06.44_PM_klghrm.png" alt="HabibiHeart-Breaker" />
          </a>
          <p id='port-info-text'>
            For my fourth project I decided to use what I learned in my third project and kept on path with a shopping app.
            In this app, you are able to view products from the clothing line Habibi Heart-Breaker. You are also able to utilize full CRUD in the comment section of the website. This was created using React and Ruby on Rails.
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  )
}

export default Portfolio
