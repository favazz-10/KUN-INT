import React from 'react'
import '../../styles/hero.css'
//import heroDarkImg from '../../images/hero-img.png'
import lightImg from '../../images/light-hero-bg.jpg'
import kunDarkImg from '../../images/hero-dark-img.png'

const Hero = ({ theme}) => {
  return (
      <section className='hero__section' id='home'>
          <div className="container">
              <div className="hero__wrapper">
                  <div className="hero__content">
                      <div>
                          <h2>We're Creating Perfect</h2>
                          <h2>Digital Products To</h2>
                          <h2 className='highlight'>Promote Your Brand</h2>
                      </div>
                      <p className='description'>KUN is a leading and pioneer advertising agency with
                          6+ years of experience and tangible success
                          in the GULF region. </p>
                      <div className="hero__btns">
                          <button className='primary__btn'>Get Started Now</button>
                          <button className="secondary__btn">Discover More</button>
                      
                  </div>
                  </div>
                 
                  <div className="hero__img">
                      <img src={theme === 'light-theme' ? lightImg : kunDarkImg} alt="hero-img" />
                      
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Hero
