import React from 'react'
import './scrollUp.css'
import { Link } from 'react-scroll'  

const ScrollUp = () => {
    window.addEventListener('scroll', function() {
        const scrollUp = document.querySelector('.scrollup')
        if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
        else scrollUp.classList.remove('show-scroll')
    })
  return (
    <Link to='home' spy={true} smooth={true} offset={-50} duration={500} className='scrollup'>
        <i className='uil uil-arrow-up scrollup-icon'></i>
    </Link>
  )
}

export default ScrollUp