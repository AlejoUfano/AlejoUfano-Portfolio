import React from 'react'
import './projectCard.css'
import Tilt from 'react-parallax-tilt'

const ProjectCard = ({img, title, description, link, repository}) => {
  return (
    <Tilt 
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    tiltReverse={false}
    className='project__card-container'
    >
      <img src={img} title={title} alt={title} className="project-img" />
      <div className="project__title">{title}</div>
      <div className="project__description">{description}</div>
      <div className="project__icons-container">

        <a href={repository} className='project__icon' rel="noopener noreferrer" target='_blank'>
          <i class="uil uil-github"></i>
        </a>

        <a href={link} className='project__icon' rel="noopener noreferrer" target='_blank'>
          <i class="uil uil-external-link-alt"></i>
        </a>

      </div>

    </Tilt>
  )
}

export default ProjectCard