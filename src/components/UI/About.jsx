import React from 'react'
import '../../styles/about.css'
//import aboutImg from '../../images/about-us.jpg'
import kunAboutImg from '../../images/about.jpg'

const chooseData = [
    {
        icon:'ri-wifi-line',
        title:'Fast working process'
    },
     {
        icon: 'ri-team-line',
        title:'Dedicated team'
    },
      {
        icon: 'ri-customer-service-2-line',
        title:'24/7 Hours support'
    },

]



const About = () => {
  return (
      <section id="about">
          <div className="container">
              <div className="about__wrapper">
                  <div className="about__content">
                      <h6 className="subtitle">Why choose us</h6>
                          <h2>Specialist in aviding clients on</h2>
                      <h2 className="highlight"> financial challenges</h2>
                      <p className="description about__content-desc">Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Aut iure at dolores
                          eaque suscipit corrupti illo quae perspiciatis!
                          Aliquam delectus cum illo repudiandae distinctio placeat minima
                          vitae incidunt exercitationem enim.</p>
                      <div className="choose__item-wrappper">
                          {
                              chooseData.map((item, index) => (
                              <div className="choose__us-item" key={index}> 
                          <span className="choose__us-icon">
                              <i class={item.icon}></i>
                          </span>
                          <div>
                                          <h4 className="choose__us-title">{ item.title}</h4>
                              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  Consectetur culpa placeat, iste expedita porro maiores adipisci.
                                  Ipsam sit</p>
                          </div>
                      </div>
                          ))
                          }
                      </div>
                       </div>
                      <div className="about__img">
                          
                      <img src={ kunAboutImg} alt="about" />
                  </div>
              </div>
          </div>
   </section>
  )
}

export default About
