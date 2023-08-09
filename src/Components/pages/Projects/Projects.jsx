import React, { useEffect, useState } from "react";
import "./projects.css";
import { projects } from "../../../utils/data/projects.js";
import ProjectCard from "../../organisms/ProjectCard/ProjectCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

export default function Projects() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="projects__global" id="projects">
      <div className="projects__title title">Projects</div>
      {/* <div className='projects__subtitle'>Recent Projects</div> */}
      <motion.div
        className="projects__cards-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect
          speed={800}
          slidesPerView={width > 768 ? 2 : 1}
          loop
          className="projects__slider"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.title} className="swiper__slide">
              <ProjectCard key={p.title} {...p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
