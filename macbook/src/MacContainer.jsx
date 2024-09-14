import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const MacContainer = () => {
  //hamne laptop ka glb file le liya
  let model = useGLTF("./mac.glb");
  //hamne image le liya

  let tex = useTexture("./red.jpg");
  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });
  console.log(meshes);

  //laptop ke upar ki screen ko rotate karke band kiya hai
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  //whiteness ko clear kiya hai
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;

  //ye batata hai ki apne kitna scroll kiya hai.
  let data = useScroll();
  //har frame pe chalta hai
  useFrame((state, delta) => {
    // console.log(data.offset)
    // x ki value pehle se 180 hai to data.offset jo ki 0 se 1 tak jaati hai to jab usko 90 se multiply karenge to wo 0 to 90 tak jayegi.
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });
  return (
    <group position={[0, -15, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
