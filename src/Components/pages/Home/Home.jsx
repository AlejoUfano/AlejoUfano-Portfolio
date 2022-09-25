import React, { useState } from 'react'
import './home.css'
import Social from '../../organisms/Social/Social'
import Data from '../../organisms/Data/Data'
import Model from '../../organisms/Model/Model'
import Model2 from '../../organisms/Model/Model2'

const Home = () => {
  let [model, setModel] = useState('drone')
  return (
    <div className='home__container' id='home'>
    <div className='home__wrapper'>
      <div className= {model==='drone' ? 'social__container' : 'social__container2'}>
        <Social />
      </div>  
      <div className='info__wrapper'>
        <div className='info__container'>
          <Data />
        </div>
        { model==='drone' ? <Model /> : <Model2 /> }
      </div>      
    </div>      
    </div>
  )
}

export default Home