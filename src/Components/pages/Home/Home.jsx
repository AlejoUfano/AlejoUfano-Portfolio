import React from 'react'
import './home.css'
import Social from '../../organisms/Social/Social'
import Data from '../../organisms/Data/Data'
import Model from '../../organisms/Model/Model'
import Droned from '../../organisms/Model/Droned'
import { motion } from "framer-motion";

const Home = ({ darkmode }) => {
  return (
    <div className='home__container' id='home'>
    <motion.div 
    className='home__wrapper'
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x:-50 },
      visible: { opacity: 1, x: 0},
    }}
    >
      <div className='social__container'>
        <Social />
      </div>  
      <div className='info__wrapper'>
        <div className='info__container'>
          <Data />
        </div>
        { darkmode ? <Model /> : <Droned /> }
      </div>      
    </motion.div>      
    </div>
  )
}

export default Home