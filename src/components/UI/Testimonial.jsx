import React from 'react'
import '../../styles/testimonial.css'
import Slider from 'react-slick'

import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-3.jpg'

const Testimonial = () => {

    const settings = {
        dots: false,
    infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
    slidesToShow: 1,
        slidesToScroll: 1,
    swipeToSlide: true
    }
  return (
      <section>
          <div className="container">
              <div className="slider__content-top">
                  <h6 className="subtitle">Testimonials</h6>
                  <h2>Trusted by more than <span className="highlight">5,000 customers</span></h2>
              </div>
              <div className="slider__wrapper">
                  <Slider {...settings}>
                    <div className="slider__item">
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod dolores cum ratione ipsum culpa exercitationem nostrum fuga totam!
                      Porro exercitationem cum earum in nihil cumque sequi. Vero odio, placeat officia,
                      ducimus asperiores illo exercitationem delectus similique magni nobis corrupti minus?
                    </p>
                    <div className="customer__details">
                      <div className="customer__img">
                          <img src={ ava01} alt="ava" />
                      </div>
                      <div>
                            <h5 className="customer__name">John Doe</h5>
                            <p className="description">CEO at Company.inc</p>
                      </div>
                  </div>
                      </div>
                      <div className="slider__item">
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod dolores cum ratione ipsum culpa exercitationem nostrum fuga totam!
                      Porro exercitationem cum earum in nihil cumque sequi. Vero odio, placeat officia,
                      ducimus asperiores illo exercitationem delectus similique magni nobis corrupti minus?
                    </p>
                    <div className="customer__details">
                      <div className="customer__img">
                          <img src={ ava02} alt="ava" />
                      </div>
                      <div>
                            <h5 className="customer__name">Anna Mathew</h5>
                            <p className="description">Software Developer</p>
                      </div>
                  </div>
                      </div>
                      <div className="slider__item">
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod dolores cum ratione ipsum culpa exercitationem nostrum fuga totam!
                      Porro exercitationem cum earum in nihil cumque sequi. Vero odio, placeat officia,
                      ducimus asperiores illo exercitationem delectus similique magni nobis corrupti minus?
                    </p>
                    <div className="customer__details">
                      <div className="customer__img">
                          <img src={ ava03} alt="ava" />
                      </div>
                      <div>
                            <h5 className="customer__name">Cody Rhodes</h5>
                            <p className="description">Marketing Manager</p>
                      </div>
                  </div>
              </div>
          </Slider>
              </div>
         </div>
    </section>
  )
}

export default Testimonial
