import React, {useEffect, useState} from 'react'
import './home.css'
import Social from '../../organisms/Social/Social'
import Data from '../../organisms/Data/Data'
import ScrollDown from '../../organisms/ScrollDown/ScrollDown'

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)    
}
    window.addEventListener('resize', handleResize)
  },[])
  return (
    <div className='home__container' id='home'>

    <div className='home__wrapper'>
        <div className='social__container'>
          <Social/>
        </div>
  
      <div className='info__wrapper'>
          <div className='info__container'>
            <Data/> 
          </div>
          <div className='img__container'/>
      </div>
    </div>
      {width > 768 ? <ScrollDown/> : null}
    </div>
  )
}

export default Home