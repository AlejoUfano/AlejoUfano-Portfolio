import React, {useEffect, useState} from 'react'
import { Link } from 'react-scroll' 
import ScrollDown from '../ScrollDown/ScrollDown'

const Data = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)    
}
    window.addEventListener('resize', handleResize)
  },[])
  return (
    <div className='data__container'>
        <h1 className='home__title title'>Alejo Ufano
        </h1>
        <h3 className='home__subtitle subtitle'>
        <div className='subtitle__line'></div>Full Stack Developer
        </h3>
        <p className='home__description description'>
          I am a quick learner developer with a great sense of responsibility and commitment.
        </p>
        <Link to='contact' spy={true} smooth={true} offset={0} duration={500} className='button button--flex button__home'>
            Contact Me  <i class='uil uil-message' style={{fontSize: '23px',marginLeft:'.2rem', backgroundColor:'transparent'}}></i>
        </Link>
        {width > 768 ? <ScrollDown/> : null} 
    </div>
  )
}

export default Data