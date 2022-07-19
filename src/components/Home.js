import React,{ useRef,Suspense} from 'react'
import Model from '../Zombie'
import AnimatedSphere from './AnimatedSphere';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {Canvas,extend,useThree,useFrame } from '@react-three/fiber';
import { Unity, useUnityContext } from "react-unity-webgl";
import GameName from './ProjectName'

extend({OrbitControls})
export default function Home() {

  const { unityProvider } =   useUnityContext({
    loaderUrl: "./zombi/Build/zombi.loader.js",
    dataUrl: "./zombi/Build/zombi.data",
    frameworkUrl: "./zombi/Build/zombi.framework.js",
    codeUrl: "./zombi/Build/zombi.wasm",
  });

  
  const Control = () => {

    const controls  = useRef()  

    const {camera,gl} = useThree()

    useFrame(() => {
        controls.current.update()
    })
    

    return (
        <orbitControls ref={controls}  args={[camera,gl.domElement]}></orbitControls>
    )
}

  const Controls = () => {

    const controls  = useRef()  

    const {camera,gl} = useThree()

    useFrame(() => {
        controls.current.update()
    })
    

    return (
        <orbitControls ref={controls} autoRotate args={[camera,gl.domElement]} ></orbitControls>
    )
}


  return (
    
  <div  > 
    <Unity 
  unityProvider={unityProvider} 
  className='video'
  />
    <p>.</p>
    <div className='right'>
    <div className='gamename' >
    <Canvas  camera={{ fov:50, position: [0,0,15]}} className='title' >
    <Control/>
    <Suspense fallback={null}>
      <ambientLight />
      <directionalLight intensity={2} position={[0,0,50]} />
      <GameName />

    </Suspense>

  </Canvas>
  </div>
    <div className='zombiediv'>
      
    <Canvas  >
    <Controls />
    <Suspense fallback={null}>
      <ambientLight />
      <directionalLight intensity={2} position={[0,0,50]} />
      <Model  />

    </Suspense>
      </Canvas>
      <a href="/jeu"> <button className='button-74'>
        start playing
      </button> </a>
    </div>
    </div>

      <div className='divspherehome'>
      <div >
    <Canvas  className='sphere'>
        <Controls/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          
          <AnimatedSphere />
        </Suspense>
    </Canvas>
  </div>
    </div>
   
  </div> 
        );
}