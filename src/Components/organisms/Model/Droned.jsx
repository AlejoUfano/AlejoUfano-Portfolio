import React, { Suspense, useRef } from "react";
import "./droned.css";
import { NewDrone } from "./NewDrone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const Droned = () => {
  const ref = useRef();
  return (
    <div className="droned">
      <Canvas shadows dpr={[1, 10]} camera={{ fov: 70 }}>
        <Suspense fallback={null}>
          <Stage
            contactShadow
            shadows
            adjustCamera
            intensity={1}
            environment="city"
            preset="rembrandt"
            controls={ref}
          >
            <NewDrone />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  );
};
export default Droned;
