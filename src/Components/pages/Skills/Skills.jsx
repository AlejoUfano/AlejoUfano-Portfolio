import React, { useEffect, useState } from 'react'
import './skills.css'
import Tilt from 'react-parallax-tilt'
import { skills } from '../../../utils/data/skills'
import SkillItem from '../../organisms/SkillItem/SkillItem'
import { motion } from 'framer-motion'

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)    
}
    window.addEventListener('resize', handleResize)
  },[])
  
  return (
    
    <motion.div 
    className='skills__global' id='skills'
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x:-50 },
      visible: { opacity: 1, x: 0},
    }}
    >
     <div className='skills__title title'>Skills</div>
     <Tilt 
      tiltEnable = {width > 768 ? true : false}
      className = 'tilt'
      tiltMaxAngleX = {10}
      tiltMaxAngleY = {10}
      tiltReverse = {false}
      glareEnable = {true}
      glareMaxOpacity = {1}
      glareColor = 'var(--tilt-glare)'>

        {skills.map((s) => (
          <SkillItem key={s.title} {...s} />
        ))}
        
     </Tilt>
    </motion.div>
  )
}

export default Skills