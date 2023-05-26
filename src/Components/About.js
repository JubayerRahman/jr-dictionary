import React from 'react'
import about from "./Images/about.jpg";
import "./About.css"
import Animation from './Animation';

const About = () => {
  return (
    <Animation>
    <div className='aboutPage'>
      <div className='aboutSection'>
        <img className='aboutImg' src={about} alt='img'/>
          <div className='aboutData'>
            <h2>About this app:</h2>
            <div className='aboutdivider'></div>
            <p>This is a web app based on React to help you find out English words' meanings and translate 
              English speeches into your own language. But the real reason behind the app is to exercise 
              my programming skills. If you find this app helpful and have any suggestions for me contact 
              me on my social media pages.
            </p>
          </div>
      </div>
      <div className='socialicon'>
        <h1>My Social Media Pages:</h1>
        <div className='aboutdivider'></div>
        <div className='socialLinks'>
        <button>
          <a href='https://www.facebook.com/15855jubayer' target='_blank'> 
          <i class="fa-brands fa-facebook"></i></a>
        </button>
        <button>
            <a href='https://www.instagram.com/jubayerrahman8/' target='_blank'>
            <i class="fa-brands fa-instagram"></i>
            </a>
          </button>
        <button>
          <a href='https://twitter.com/jubayerr398' target='_blank'>
          <i class="fa-brands fa-twitter"></i>
          </a>
        </button>
        <button>
          <a href='https://sidemenuportfolio.netlify.app/' target='_blank'>
          <i class="fa-solid fa-globe"></i>
          </a>
        </button>
        </div>
      </div>
    </div>
    </Animation>
  )
}

export default About