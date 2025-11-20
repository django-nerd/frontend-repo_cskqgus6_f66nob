import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

function Cube({ position, seed }) {
  const ref = useRef()
  const color = useMemo(() => {
    const c1 = new THREE.Color('#60a5fa') // blue-400
    const c2 = new THREE.Color('#a78bfa') // violet-400
    return c1.lerp(c2, Math.random())
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const s = 1 + 0.12 * Math.sin(t * 1.6 + seed)
    if (ref.current) {
      ref.current.rotation.x = t * 0.2 + seed * 0.1
      ref.current.rotation.y = t * 0.3 + seed * 0.15
      ref.current.scale.set(s, s, s)
      const glow = (Math.sin(t * 1.2 + seed) + 1) / 2 // 0..1
      const base = new THREE.Color('#60a5fa')
      const mix = new THREE.Color('#a78bfa')
      ref.current.material.color.copy(base.lerp(mix, glow))
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial wireframe color={color} emissive={new THREE.Color('#3b82f6')} emissiveIntensity={0.35} />
    </mesh>
  )
}

function Grid() {
  const cubes = useMemo(() => {
    const arr = []
    const size = 6
    const spacing = 1.4
    let i = 0
    for (let x = -size; x <= size; x++) {
      for (let z = -size; z <= size; z++) {
        const pos = [x * spacing, 0, z * spacing]
        arr.push({ position: pos, seed: i * 0.37 })
        i++
      }
    }
    return arr
  }, [])

  return (
    <group rotation={[ -0.35, 0.45, 0 ]} position={[0, 0, 0]}>
      {cubes.map((c, idx) => (
        <Cube key={idx} position={c.position} seed={c.seed} />
      ))}
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 8, 18], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={[0, 0, 0]} />
      <fog attach="fog" args={[new THREE.Color('#020617'), 18, 38]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[6, 10, 6]} intensity={0.9} color={'#a78bfa'} />
      <directionalLight position={[-6, -4, -6]} intensity={0.3} color={'#60a5fa'} />
      <Suspense fallback={null}>
        <Grid />
        <Environment preset="city" />
      </Suspense>
      {/* Controls disabled on pointer events to keep it decorative */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}
