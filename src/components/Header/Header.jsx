import React, { useEffect, useRef } from 'react'
import './header.css'

const nav__links = [
    {
        path: '#home',
        display:'Home'
    },
     {
        path: '#about',
        display:'About'
    },
      {
        path: '#service',
        display:'Service'
    },
       {
        path: '#projects',
        display:'Projects'
    },
        {
        path: '#blog',
        display:'Blog'
    },
]
const Header = ({ theme, toggleTheme }) => {

    const headerRef = useRef(null)

    const menuRef=useRef(null)

    const headerFun = () => { 
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerRef.current.classList.add('header__shrink')
        } else { 
            headerRef.current.classList.remove('header__shrink')
        }
    }

    useEffect(() => { 
        window.addEventListener('scroll', headerFun)
        
        return()=> window.removeEventListener('scroll',headerFun)
    }, [])
    
    const handleClick = (e) => { 
        e.preventDefault()
        
        const targetAttr = e.target.getAttribute('href')
        
        const location = document.querySelector(targetAttr).offsetTop
        
        window.scrollTo({
            left: 0,
            top:location - 80
        })
    }

    const toggleMenu = () => { 
        menuRef.current.classList.toggle('menu__active')
    }

  return (
      <header className="header" ref={headerRef}>
          <div className="container">
              <div className="nav__wrapper">
                  <div className="logo">
                      <h2>Kun Int</h2>
                      
                  </div>
{/******************************NAVIGATION******************************************/}
                 
                  <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                      <ul className="menu">
                          {
                              nav__links.map((item, index) => (
                                  <li className="menu__item" key={index}>
                                      <a href={item.path} onClick={handleClick} className="menu__link">{ item.display}</a>
                                  </li>
                              ))
                          }
                      </ul>
                  </div>
                  {/*******************************LIGHT MODE****************************/}
                 
                  <div className="light__mode">
                      <span onClick={toggleTheme}>
                          {
                              theme === 'light-theme' ? (<span><i class="ri-moon-line"></i>Dark</span>) :
                                  (<span><i class="ri-sun-line"></i>Light</span>)
                          }
                          </span>
                  </div>

                  <span className="mobile__menu" onClick={toggleMenu}><i class="ri-menu-line"></i></span>
              </div>
          </div>
    </header>
  )
}

export default Header
