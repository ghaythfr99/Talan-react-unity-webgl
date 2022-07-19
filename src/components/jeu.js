import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Jeu() {

  const { UnityProvider } =   useUnityContext({
    loaderUrl: "./jeu/Build/WebGL2.loader.js",
    dataUrl: "./jeu/Build/WebGL2.data",
    frameworkUrl: "./jeu/Build/WebGL2.framework.js",
    codeUrl: "./jeu/Build/WebGL2.wasm",
  });
  return (
  <div>
  <div>
  <a href="/"> <button className='button-75'>
        Exit 
      </button> </a>
  </div>
  <Unity 
  UnityProvider={UnityProvider} 
  className='jeu'
  />;
  </div>      
);
}
