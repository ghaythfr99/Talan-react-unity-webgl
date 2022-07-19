import React from "react";

export default function Box() {

  return (
    <mesh >
      <boxBufferGeometry attach="geometry" args={[3.5, 3.5, 3.5]} />
      <meshBasicMaterial wireframe attach="material" color="white" />
    </mesh>
  );
}
