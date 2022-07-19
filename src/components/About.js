import React,{useRef,Suspense} from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import Boxala from './box ala '
import Boxdarine from './box darine '
import Boxghayth from './ghayth'
import Boxyassine from './box yassine'
import AnimatedSphere from './AnimatedSphere';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {Canvas,extend,useThree,useFrame } from '@react-three/fiber';

extend({OrbitControls})
export default function About() {
  
  const spans = document.querySelectorAll('.word span');

  spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
      e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
      e.target.classList.remove('active');
    });
    
    // Initial animation
    setTimeout(() => {
      span.classList.add('active');
    }, 750 * (idx+1))
  });

  const Controls = () => {

    const controls  = useRef()  

    const {camera,gl} = useThree()

    useFrame(() => {
        controls.current.update()
    })
    

    return (
        <orbitControls ref={controls} autoRotate args={[camera,gl.domElement]}></orbitControls>
    )
}
  const { unityProvider } =   useUnityContext({
    loaderUrl: "./zombi/Build/zombi.loader.js",
    dataUrl: "./zombi/Build/zombi.data",
    frameworkUrl: "./zombi/Build/zombi.framework.js",
    codeUrl: "./zombi/Build/zombi.wasm",
  });
  return (
  <div className='about'>
    
    <div className='divbox'>
    <div>
    <div class="word">
  <span>G</span>
  <span>h</span>
  <span>a</span>
  <span>y</span>
  <span>t</span>
  <span>h</span>
</div>
<div class="word">
  <span>F</span>
  <span>a</span>
  <span>r</span>
  <span>h</span>
  <span>a</span>
  <span>t</span>
  </div>

    </div>
    
    <div className='box'>
    <Canvas >
        <Controls/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Boxghayth />
        </Suspense>
      </Canvas>
    </div>
  </div>

  <div className='divbox'>
    <div>
    <div class="word">
  <span>D</span>
  <span>a</span>
  <span>r</span>
  <span>i</span>
  <span>n</span>
  <span>e</span>
</div>
<div class="word">
  <span>S</span>
  <span>m</span>
  <span>i</span>
  <span>r</span>
  <span>a</span>
  <span>n</span>
  <span>i</span>
  </div>
</div>
    <div className='box'>
    <Canvas >
        <Controls/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Boxdarine />
        </Suspense>
      </Canvas>
    </div>
  </div>
      
   
    
<div className='divbox'>
<div>
    <div class="word">
  <span>A</span>
  <span>l</span>
  <span>a</span>
  <span>E</span>
  <span>d</span>
  <span>d</span>
  <span>i</span>
  <span>n</span>
  <span>e</span>
</div>
<div class="word">
  <span>E</span>
  <span>l</span>
  <span>a</span>
  <span>b</span>
  <span>e</span>
  <span>d</span>
  </div>
</div>
    <div className='box'>
    <Canvas >
        <Controls/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Boxala />
        </Suspense>
      </Canvas>
    </div>
  </div>


  <Unity 
  unityProvider={unityProvider} 
  className='unity'
  style={{
    width: "700px",
    height:"500px",
    border: "2px solid black",
    
  }}/>
  
  <div class="animated-title">
  <div class="text-top">
    <div>
      <span>It's time to survive! </span>
      <span>
Survive the zombie apocalypse in your own house filled with bloodthirsty zombies.</span>
    </div>
  </div>
  <div class="text-bottom">
    <div>
You just have to run and explore the forest to escape from the zombies to reach the Gold Coin and move to another level.</div>
  </div>
</div>

   
   <div className='divsphereabout'>
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