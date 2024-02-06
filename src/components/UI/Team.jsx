import React from 'react'
import '../../styles/team.css'
import team11 from '../../images/mishal.png'
import team22 from '../../images/malak.png'
import team33 from '../../images/iram.png'
import team44 from '../../images/Cooper.png'
// import team01 from '../../images/team-01.png'
// import team02 from '../../images/team-02.png'
// import team03 from '../../images/team-03.png'
// import team04 from '../../images/team-04.png'


const teamMembers = [
    {
        imgUrl: team11,
        name: 'Mishal Abdullah',
        position: 'Founder & CEO'
    },
     {
        imgUrl: team33,
        name: 'Iram Sau',
        position: 'Secratary'
    },
      {
        imgUrl: team22,
        name: 'Malak Housseini',
        position: 'Graphic Designer'
    },
       {
        imgUrl: team44,
        name: 'Walter White',
        position: 'Sr Software Engineer'
    },
]

const Team = () => {
  return (
      <section className="our__team">
          <div className="container">
              <div className="team__content">
                  <h6 className="subtitle">Our Team</h6>
                  <h2>Meet with <span className='highlight'>our team</span></h2>
              </div>
              <div className="team__wrapper">
                  {
                      teamMembers.map((item,index) => (
                           <div className="team__item" key={index}>
                      <div className="team__img">
                          <img src={ item.imgUrl} alt="team" />
                      </div>
                      <div className="team__details">
                          <h4>{item.name}</h4>
                                  <p className="description">{ item.position}</p>
                          <div className="team__member-social">
                              <span><i class="ri-linkedin-line"></i></span>
                              <span><i class="ri-twitter-x-line"></i></span>
                          </div>
                      </div>
                  </div>
                      ))
                  }
              </div>
          </div>
    </section>
  )
}

export default Team
