import { Canvas, useFrame } from '@react-three/fiber'
import { Clouds, Cloud, Environment, Grid, Sparkles } from '@react-three/drei'
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
    group.current.position.x = Math.sin(t * 0.1 + base.x) * 0.6 + t * wind
    group.current.position.y = Math.sin(t * 0.07 + base.y) * 0.25
    group.current.position.z = Math.cos(t * 0.08 + base.z) * 0.4
    group.current.rotation.y = Math.sin(t * 0.05) * 0.05
  })

  return (
    <group ref={group} rotation={[ -0.08, 0.24, 0 ]} position={[ -4, 0.4, -2 ]}>
      <Clouds material={THREE.MeshStandardMaterial} limit={360} range={20} fade>
        {/* Main billow across the hero */}
        <Cloud seed={1} bounds={[16, 6, 8]} volume={8} concentrate="outside" growth={6}
               color="#b3d8ff" speed={0.22} opacity={0.82}>
        </Cloud>
        {/* Higher wisp layer */}
        <Cloud seed={2} bounds={[12, 4, 10]} volume={6} concentrate="inside" growth={5}
               color="#94caff" speed={0.27} opacity={0.72} position={[2, 1.6, -1]}>
        </Cloud>
        {/* Lower dense puffs */}
        <Cloud seed={3} bounds={[14, 5, 9]} volume={7} concentrate="outside" growth={6.5}
               color="#d4f0ff" speed={0.18} opacity={0.86} position={[1, -0.6, 0.5]}>
        </Cloud>
        {/* Far background haze for depth */}
        <Cloud seed={4} bounds={[24, 7, 14]} volume={10} concentrate="inside" growth={7}
               color="#68a8ff" speed={0.13} opacity={0.33} position={[4, 0.2, -6]}>
        </Cloud>
      </Clouds>
    </group>
  )
}

function TechGrid() {
  // Futuristic ground grid fading into fog
  return (
    <Grid
      position={[0, -2.2, 0]}
      args={[60, 60]}
      cellSize={0.7}
      cellThickness={0.4}
      sectionSize={4}
      sectionThickness={1}
      fadeDistance={30}
      fadeStrength={1}
      followCamera
      infiniteGrid
      cellColor={new THREE.Color('#1f3b6f')}
      sectionColor={new THREE.Color('#38bdf8')}
    />
  )
}

function TechParticles() {
  // Subtle shimmering particles for a "data" feel
  return (
    <group position={[0, 0.5, -2]}>
      <Sparkles
        count={80}
        speed={0.25}
        opacity={0.6}
        scale={[18, 6, 10]}
        size={2}
        color={new THREE.Color('#60a5fa')}
      />
      <Sparkles
        count={40}
        speed={0.35}
        opacity={0.45}
        scale={[16, 4, 12]}
        size={1.3}
        color={new THREE.Color('#a78bfa')}
      />
    </group>
  )
}

function ScanningLight() {
  const light = useRef()
  useFrame(({ clock }) => {
    if (!light.current) return
    const t = clock.getElapsedTime()
    // Sweep a cyan spotlight slowly across the hero clouds
    const sweep = Math.sin(t * 0.3) * 8
    light.current.position.set(-8 + sweep, 3.5 + Math.sin(t * 0.8) * 0.3, 6)
    light.current.target.position.set(0, 0, -2)
    light.current.target.updateMatrixWorld()
  })
  return (
    <spotLight
      ref={light}
      color={new THREE.Color('#67e8f9')}
      intensity={1.2}
      distance={35}
      angle={0.5}
      penumbra={0.6}
      decay={1.5}
      castShadow={false}
    />
  )
}

export default function HeroScene() {
  // Slight camera bob for a more "alive" scene
  const camRef = useRef()

  return (
    <Canvas
      camera={{ position: [0, 5.2, 15.2], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ camera, scene }) => {
        camRef.current = camera
        scene.background = new THREE.Color(0x000000)
      }}
    >
      <color attach="background" args={[0, 0, 0]} />
      <fog attach="fog" args={[new THREE.Color('#050915'), 16, 40]} />

      {/* Ambient and stylized rim lights */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 10, 6]} intensity={0.75} color={'#a78bfa'} />
      <directionalLight position={[-6, -4, -6]} intensity={0.35} color={'#38bdf8'} />

      <Suspense fallback={null}>
        <CloudField />
        <TechGrid />
        <TechParticles />
        <ScanningLight />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
