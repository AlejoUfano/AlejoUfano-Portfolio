import React from 'react'
import './home.css'
import Social from '../../organisms/Social/Social'
import Data from '../../organisms/Data/Data'
import Model from '../../organisms/Model/Model'
import Droned from '../../organisms/Model/Droned'

const Home = ({ darkmode }) => {
  return (
    <div className='home__container' id='home'>
    <div className='home__wrapper'>
      <div className='social__container'>
        <Social />
      </div>  
      <div className='info__wrapper'>
        <div className='info__container'>
          <Data />
        </div>
        { darkmode ? <Model /> : <Droned /> }
      </div>      
    </div>      
    </div>
  )
}

export default Home