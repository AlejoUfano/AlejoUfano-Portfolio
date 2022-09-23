import React, { useEffect, useState } from 'react'
import './projects.css'
import { projects } from '../../../utils/data/projects.js'
import ProjectCard from '../../organisms/ProjectCard/ProjectCard.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export default function Projects() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)    
}
    window.addEventListener('resize', handleResize)
  },[])
  return (
    <div className='projects__global'>
      <div className="projects__title title">Projects</div>
      <div className="projects__cards-container">
        {/* {projects.map(p=>(
          <ProjectCard key={p.title} {...p}/>
        ))} */}

        <Swiper
          modules = {[Navigation, EffectFade]}
          navigation
          effect
          speed = {800}
          slidesPerView = { width > 768 ? 2 : 1 }
          loop
          className='projects__slider'
        >
          {projects.map(p=>(
            <SwiperSlide className='swiper__slide'><ProjectCard key={p.title} {...p}/></SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}
