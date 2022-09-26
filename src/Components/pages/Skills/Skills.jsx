import React, { useEffect, useState } from 'react'
import './skills.css'
import Tilt from 'react-parallax-tilt'
import { skills } from '../../../utils/data/skills'
import SkillItem from '../../organisms/SkillItem/SkillItem'


const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)    
}
    window.addEventListener('resize', handleResize)
  },[])
  
  return (
    
    <div className='skills__global' id='skills'>
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
    </div>
  )
}

export default Skills