import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Spaceman(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/spaceman.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Empty" position={[0.05, 1.38, 4.31]} scale={9.82} />
            <group name="Sphere007">
              <mesh
                name="Sphere007_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere007_0.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="NurbsPath004"
              position={[0.63, 0.09, 4.16]}
              rotation={[-0.53, -0.21, -1.31]}
              scale={0.36}
            >
              <mesh
                name="NurbsPath004_0"
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath004_0.geometry}
                material={materials["tuta_metallico.001"]}
              />
            </group>
            <group
              name="Plane005"
              position={[0.1, 2.15, 3.08]}
              rotation={[1.59, -0.01, 0.02]}
              scale={[0.79, 1.01, 1.01]}
            >
              <mesh
                name="Plane005_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane005_0.geometry}
                material={materials.tuta_metallico}
              />
            </group>
            <group
              name="Cylinder002"
              position={[0.11, 1.5, 3.31]}
              rotation={[0.02, -0.02, -0.01]}
              scale={0.87}
            >
              <mesh
                name="Cylinder002_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002_0.geometry}
                material={materials.tuta_metallico}
              />
            </group>
            <group name="Plane006">
              <mesh
                name="Plane006_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane006_0.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="Sphere008"
              position={[0.11, 1.44, 3.19]}
              rotation={[0.02, -0.02, -0.01]}
              scale={0.92}
            >
              <mesh
                name="Sphere008_1"
                castShadow
                receiveShadow
                geometry={nodes.Sphere008_1.geometry}
                material={materials.specchio}
              />
              <mesh
                name="Sphere008_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere008_0.geometry}
                material={materials.tuta_metallico}
              />
            </group>
            <group name="Sphere009">
              <mesh
                name="Sphere009_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere009_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                name="Sphere009_0_4"
                castShadow
                receiveShadow
                geometry={nodes.Sphere009_0_4.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                name="Sphere009_0_3"
                castShadow
                receiveShadow
                geometry={nodes.Sphere009_0_3.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                name="Sphere009_0_1"
                castShadow
                receiveShadow
                geometry={nodes.Sphere009_0_1.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                name="Sphere009_0_2"
                castShadow
                receiveShadow
                geometry={nodes.Sphere009_0_2.geometry}
                material={materials["Material.001"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/spaceman.gltf");
