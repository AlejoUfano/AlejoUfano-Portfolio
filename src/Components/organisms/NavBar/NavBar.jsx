import React, { useState, useEffect } from 'react'
import './navBar.css'
import { Link } from 'react-scroll'                                                                                                                                                                                           

export default function NavBar({ darkmode, setDarkmode }) {
    let [icon, setIcon] = useState(false)
    let [Toggle, showMenu] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth)    
  }
      window.addEventListener('resize', handleResize)
    },[])
  return (
    <header className='header'>
        <nav className='nav container'>
        <Link to='home' spy={true} smooth={true} offset={-50} duration={500} className='nav__logo'>{'<Au.dev/>'}</Link>
            <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                <ul className='nav__list grid'>

                    <li className='nav__item'>
                        <Link to='home' spy={true} smooth={true} offset={-50} duration={500} className='nav__link'>
                            <i className='uil uil-estate nav__icon'></i> Home
                        </Link>
                    </li>

                    <li className='nav__item'>
                        <Link to='skills' spy={true} smooth={true} offset={0} duration={500} className='nav__link'>
                            <i className='uil uil-file-alt nav__icon'></i> Skills
                        </Link>
                    </li>

                    <li className='nav__item'>
                        <Link to='projects' spy={true} smooth={true} offset={0} duration={500} className='nav__link'>
                            <i className='uil uil-scenery nav__icon'></i> Projects
                        </Link>
                    </li>

                    <li className='nav__item'>
                        <Link to='contact' spy={true} smooth={true} offset={0} duration={500} className='nav__link'>
                            <i className='uil uil-message nav__icon'></i> Contact
                        </Link>
                    </li>
                    {width>768&&<li>
                        <div className='change__theme' onClick={()=>{
                            document.body.classList.toggle('dark-theme')
                            setIcon(!icon)
                            setDarkmode(!darkmode)
                            }}>
                            <i class={icon ? 'uil uil-moon change-theme' : 'uil uil-sun change-theme'} id='theme-button'></i>
                        </div>
                    </li>}
                </ul>
                <i class='uil uil-times nav__close' onClick={()=>showMenu(!Toggle)}></i>
            </div>
                {width<=768&&<div className='change__theme__mobile' onClick={()=>{
                    document.body.classList.toggle('dark-theme')
                    setIcon(!icon)
                    setDarkmode(!darkmode)
                    }}>
                    <i class={icon ? 'uil uil-moon change-theme' : 'uil uil-sun change-theme'} id='theme-button'></i>
                </div>}
                <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}>
                    <i class='uil uil-apps'></i>
                </div>
        </nav>
    </header>
  )
}
