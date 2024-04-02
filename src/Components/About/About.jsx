import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>

      <div className='about-left'>
        <img src={about_img} className='about-img'></img>
        <img src={play_icon} className='play-img'></img>
      </div>

      <div className='about-rigth'>
        <h3>About University</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.</p>
      </div>

    </div>
  )
}

export default About
