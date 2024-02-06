import React from 'react'
import './footer.css'

const quickLinks01 = [
    {
        path: 'abc',
        display: 'Marketing'
    },
    {
        path: 'abc',
        display: 'Analytics'
    },
    {
        path: 'abc',
        display: 'Commerce'
    },
]
const quickLinks02 = [
    {
        path: 'abc',
        display: 'Pricing'
    },
    {
        path: 'abc',
        display: 'Documentation'
    },
    {
        path: 'abc',
        display: 'Guides'
    },
]
const quickLinks03 = [
    {
        path: 'abc',
        display: 'Careers'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]


const Footer = () => {

    const year=new Date().getFullYear()

  return (
      <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <div className="footer__logo">
                      <h2>Kun Int</h2>
                      <p className="description">Grow with us</p>
                      <p className="small__text description">Manarat Lusail/ Flare business center, <br />
                          Area 69 Rode 318, <br />
                          Lusail, 00974 <br />
                          calendly.com/kun_int/kunint

                      </p>
                  </div>
                  
                  <div className="footer__quick-links">
                      <h3 className="quick__links-title">Solutions</h3>
                      <ul className="quick__links">
                          {
                              quickLinks01.map((item,index) => (
                                  <li className="quick__link-item" key={index}><a href={item.path}>{ item.display}</a></li>
                              ))
                          }
                      </ul>
                  </div>

                  <div className="footer__quick-links">
                      <h3 className="quick__links-title">Support</h3>
                      <ul className="quick__links">
                          {
                              quickLinks02.map((item,index) => (
                                  <li className="quick__link-item" key={index}><a href={item.path}>{ item.display}</a></li>
                              ))
                          }
                      </ul>
                  </div>

                  <div className="footer__quick-links">
                      <h3 className="quick__links-title">Company</h3>
                      <ul className="quick__links">
                          {
                              quickLinks03.map((item,index) => (
                                  <li className="quick__link-item" key={index}><a href={item.path}>{ item.display}</a></li>
                              ))
                          }
                      </ul>
                  </div>
              </div>
              <p className="copyright">Copyright { year}, All rights reserved.</p>
          </div>
    </footer>
  )
}

export default Footer
