import React from 'react'
import '../../styles/services.css'


const serviceData = [
    {
        icon: 'ri-apps-line',
        title:'App Development'
    },
     {
        icon: 'ri-code-s-slash-line',
        title:'Web Design'
    },
      {
        icon: 'ri-landscape-line',
        title:'Creative Design'
    },
       {
        icon: 'ri-rocket-line',
        title:'Brand Building'
    },
]



const Services = () => {
  return (
      <section id="service">
          <div className="container">
              <div className="services__top-content">
                  <h6 className="subtitle">Our Services</h6>
                  <h2>Save time managing your business with</h2>
                  <h2 className="highlight"> our best services</h2>
              </div>
              <div className="service__item-wrapper">
                  {
                      serviceData.map((item, index) => (
                        <div className="services__item" key={index}>
                              <span className="service__icon"><i class={ item.icon}></i></span>
                              <h3 className="service__title">{ item.title}</h3>
                      <p className="description">Lorem, ipsum dolor sit elit.
                          Magnam nemo sit aperiam aliquam maiores rem fugit,
                          deserunt quasi quam harum.</p>
                  </div>
                    ))
                  }
              </div>
              
          </div>
    </section>
  )
}

export default Services
