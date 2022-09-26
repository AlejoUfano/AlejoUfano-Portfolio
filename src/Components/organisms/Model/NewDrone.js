import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function NewDrone(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/s9drone.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Circle" position={[1.38, 1.98, 0.61]} scale={0.42}>
              <mesh
                name="Circle_1"
                castShadow
                receiveShadow
                geometry={nodes.Circle_1.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                name="Circle_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group name="Circle001" position={[3.08, 2.73, -0.05]}>
              <mesh
                name="Circle001_1"
                castShadow
                receiveShadow
                geometry={nodes.Circle001_1.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                name="Circle001_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle001_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group name="Cube" position={[0.02, 0.27, 0]} scale={[1.18, 1, 1]}>
              <mesh
                name="Cube_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                name="Cube_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group
              name="Sphere"
              position={[0.05, 2.87, -0.19]}
              scale={[0.1, 0.1, 0.12]}
            >
              <mesh
                name="Sphere_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              name="Sphere001"
              position={[0, -2.49, -0.12]}
              scale={[0.17, 0.13, 0.16]}
            >
              <mesh
                name="Sphere001_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere001_0.geometry}
                material={materials["Material.004"]}
              />
            </group>
            <group
              name="Cube001"
              position={[1.14, 0.83, 0.28]}
              scale={[0.1, 0.05, 0.05]}
            >
              <mesh
                name="Cube001_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_0.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="Circle002"
              position={[3.06, 2.73, 1]}
              rotation={[0, 0, 0.05]}
              scale={0.15}
            >
              <mesh
                name="Circle002_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle002_0.geometry}
                material={materials.pale}
              />
            </group>
            <group
              name="Circle003"
              position={[-3.03, 2.75, 1]}
              rotation={[0, 0, -1.44]}
              scale={0.15}
            >
              <mesh
                name="Circle003_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle003_0.geometry}
                material={materials.pale}
              />
            </group>
            <group
              name="Circle004"
              position={[-3.03, -2.19, 1]}
              rotation={[0, 0, -0.39]}
              scale={0.15}
            >
              <mesh
                name="Circle004_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle004_0.geometry}
                material={materials.pale}
              />
            </group>
            <group
              name="Circle005"
              position={[3.05, -2.19, 1]}
              rotation={[0, 0, -1.36]}
              scale={0.15}
            >
              <mesh
                name="Circle005_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle005_0.geometry}
                material={materials.pale}
              />
            </group>
            <group
              name="Cylinder"
              position={[0.06, 3.09, 0.25]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.12}
            >
              <mesh
                name="Cylinder_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_0.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="Cylinder001"
              position={[-0.06, 3.09, 0.25]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.12}
            >
              <mesh
                name="Cylinder001_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_0.geometry}
                material={materials.Root}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/s9drone.gltf");
