import React from 'react'
import './skillItem.css'

const SkillItem = ({ href, img, title }) => {
  return (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        align="center"
        className="skill-text"
      >
        <img src={img} title={title} alt={title} className="skill-img" />
        {title}
      </a>
  )
}

export default SkillItem