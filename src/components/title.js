import React, { useEffect, useRef } from "react";
import { Canvas,extend, useThree ,useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import Roboto from "./Roboto Thin_Italic.json"


const CameraController = () => {
   const { camera, gl } = useThree();
   useEffect(
      () => {
         const controls = new OrbitControls(camera, gl.domElement);
         controls.minDistance = 3;
         controls.maxDistance = 20;
         return () => {
            controls.dispose();
         };
      },
      [camera, gl]
   );
   return null;
};
extend({OrbitControls})
export default function Title () {
   const font = new THREE.FontLoader().parse(Roboto);
   const textOptions = {
      font,
      size: 5,
      height: 1
   };
   return (
      <mesh>
        <CameraController/>
         <textGeometry attach='geometry' args={['three.js', textOptions]} />
         <meshStandardMaterial attach='material' color="hotpink" />
       </mesh>
    )
}

