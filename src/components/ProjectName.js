/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ProjectName.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['3D_Text_-_D'].geometry} material={materials.Siren} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <mesh geometry={nodes['3D_Text_-_A'].geometry} material={materials.Siren} position={[3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      <mesh geometry={nodes['3D_Text_-_Z'].geometry} material={materials.Siren} position={[6, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}  scale={0.1} />
      <mesh geometry={nodes['3D_Text_-_Y'].geometry} material={materials.Siren} position={[9, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/ProjectName.glb')