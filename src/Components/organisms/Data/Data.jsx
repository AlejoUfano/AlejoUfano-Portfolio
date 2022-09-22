import React from 'react'

const Data = () => {
  return (
    <div className="data__container">
        <h1 className="home__title title">Alejo Ufano
        </h1>
        <h3 className="home__subtitle subtitle">
        <div className="subtitle__line"></div>Full Stack Developer
        </h3>
        <p className="home__description description">
            I am a very committed, passionate and constantly learning developer.
        </p>
        <a href="#contact" className="button button--flex">
            Contact Me  <i class="uil uil-message" style={{fontSize: '23px',marginLeft:'.2rem'}}></i>
        </a>
    </div>
  )
}

export default Data