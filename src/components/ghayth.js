

import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "./img/ghayth.jpg";

export default function Box() {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh >
      <boxBufferGeometry attach="geometry" args={[3.5, 3.5, 3.5]} />
       <meshStandardMaterial map={colorMap} /> 
    </mesh>
  );
}
