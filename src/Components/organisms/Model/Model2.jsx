
import React, { Suspense, useRef, useEffect, useState } from 'react'
import './model2.css'
import { Spaceman } from './Spaceman'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

const Model2 = () => {
//   const [size, setSize] = useState(window.innerWidth<=768 ? 'small' : 'large')
//   useEffect(() => {                              
//     function handleResize() {       /// FUNCTION FOR TESTING PURPOSES (AUTO UPDATE OF 'FOV' ON WIDTH CHANGE) ///
//       if(window.innerWidth<=768 && size==='large') {
//         setSize('small')
//         window.location.reload(false);
//       } else if (window.innerWidth>768 && size==='small') {
//         setSize('large')
//         window.location.reload(false);
//       }      
// }
//     window.addEventListener('resize', handleResize)
//   },[])
    const ref = useRef()
  return (
    <div className='model2'>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: window.innerWidth <= 768 ? 40 : 55 }}>
        <Suspense fallback={null}>          
          <Stage contactShadow shadows adjustCamera intensity={1} environment="city" preset="rembrandt" controls={ref}>
            <Spaceman />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  )
}
export default Model2