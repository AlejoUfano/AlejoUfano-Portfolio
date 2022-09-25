
import React, { Suspense, useRef } from 'react'
import './model.css'
import { Drone } from './Drone'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

const Model = () => {
    const ref = useRef()
  return (
    <div className='model'>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 25 }}>
        <Suspense fallback={null}>          
          <Stage contactShadow shadows adjustCamera intensity={1} environment="city" preset="rembrandt" controls={ref}>
            <Drone />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  )
}
export default Model