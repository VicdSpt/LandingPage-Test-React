import React from 'react'
import AboutBackground from '../images/about-background.png'
import AboutBackgroundImage from '../images/about-background-image.png'
import { BsFillPlayCircleFill } from "react-icons/bs";

// ----------------------------------------------------------------

function AboutPage() {
  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="#" />
      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt="#" />
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>About</p>
        <h1>Food is good</h1>
        <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum amet numquam, necessitatibus blanditiis harum?</p>
        <p className='primary-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem cumque similique vitae atque quis et odio, debitis rerum, ipsam hic aperiam ex excepturi eius beatae.</p>
        <div className='about-buttons-container'>
          <button className='secondary-button'>Learn More about Food</button>
          <button className='watch-video-button'><BsFillPlayCircleFill/>Watch Video</button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
