import React from 'react'
import { Link } from 'react-scroll' 

const Data = () => {
  return (
    <div className='data__container'>
        <h1 className='home__title title'>Alejo Ufano
        </h1>
        <h3 className='home__subtitle subtitle'>
        <div className='subtitle__line'></div>Full Stack Developer
        </h3>
        <p className='home__description description'>
            I am a very committed, passionate and constantly learning developer.
        </p>
        <Link to='contact' spy={true} smooth={true} offset={0} duration={500} className='button button--flex'>
            Contact Me  <i class='uil uil-message' style={{fontSize: '23px',marginLeft:'.2rem'}}></i>
        </Link>
    </div>
  )
}

export default Data