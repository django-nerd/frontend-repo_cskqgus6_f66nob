import { Canvas, useFrame } from '@react-three/fiber'
import { Clouds, Cloud, Environment } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

function CloudField() {
  const group = useRef()

  // Gentle looping offsets for a drifting effect
  const base = useMemo(() => ({
    x: Math.random() * 10,
    y: Math.random() * 10,
    z: Math.random() * 10,
  }), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!group.current) return
    const wind = 0.02
    group.current.position.x = Math.sin(t * 0.1 + base.x) * 0.6
    group.current.position.y = Math.sin(t * 0.07 + base.y) * 0.25
    group.current.position.z = Math.cos(t * 0.08 + base.z) * 0.4
    group.current.rotation.y = Math.sin(t * 0.05) * 0.05
    // slow forward drift to create parallax
    group.current.position.x += t * wind
  })

  return (
    <group ref={group} rotation={[ -0.1, 0.25, 0 ]} position={[ -4, 0.5, -2 ]}>
      <Clouds material={THREE.MeshStandardMaterial} limit={400} range={20} fade>
        {/* Main billow across the hero */}
        <Cloud seed={1} bounds={[16, 6, 8]} volume={8} concentrate="outside" growth={6}
               color="#c7d2fe" speed={0.2} opacity={0.8}>
        </Cloud>
        {/* Higher wisp layer */}
        <Cloud seed={2} bounds={[12, 4, 10]} volume={6} concentrate="inside" growth={5}
               color="#bfdbfe" speed={0.25} opacity={0.7} position={[2, 1.6, -1]}>
        </Cloud>
        {/* Lower dense puffs */}
        <Cloud seed={3} bounds={[14, 5, 9]} volume={7} concentrate="outside" growth={6.5}
               color="#e0f2fe" speed={0.18} opacity={0.85} position={[1, -0.6, 0.5]}>
        </Cloud>
        {/* Far background haze for depth */}
        <Cloud seed={4} bounds={[24, 7, 14]} volume={10} concentrate="inside" growth={7}
               color="#93c5fd" speed={0.12} opacity={0.35} position={[4, 0.2, -6]}>
        </Cloud>
      </Clouds>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 5.5, 15.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={[0, 0, 0]} />
      <fog attach="fog" args={[new THREE.Color('#050915'), 18, 42]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[6, 10, 6]} intensity={0.8} color={'#a78bfa'} />
      <directionalLight position={[-6, -4, -6]} intensity={0.3} color={'#60a5fa'} />
      <Suspense fallback={null}>
        <CloudField />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
