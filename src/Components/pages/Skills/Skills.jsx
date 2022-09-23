import React from 'react'
import './skills.css'
import Tilt from 'react-parallax-tilt'
import { skills } from '../../../utils/data/skills'
import SkillItem from '../../organisms/SkillItem/SkillItem'


const Skills = () => {
  
  return (
    
    <div className="skills__global">
     <div className="skills__title title">Skills</div>
     <Tilt 
      className='tilt'
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      tiltReverse={false}
      glareEnable={true}
      glareMaxOpacity={1}
      glareColor='#BBBBBB'>
        {skills.map((s) => (
          <SkillItem key={s.title} {...s} />
        ))}
     </Tilt>
    </div>
  )
}

export default Skills