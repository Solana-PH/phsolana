import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

export function Token3d() {
  const { scene } = useGLTF('/coin.glb')
  const modelRef = useRef<THREE.Group>(null!)
  const { gl } = useThree()
  const [isDragging, setIsDragging] = useState(false)
  const targetRotation = useRef<[number, number, number]>([0, 0, 0])
  const currentRotation = useRef<[number, number, number]>([0, 0, 0])
  const idleRotation = useRef(0)
  const idleDirection = useRef(1)

  const clampDelta = (delta: number) => Math.min(delta, 0.016) // Cap frame delta to ~16ms (60 FPS)

  useEffect(() => {
    const handlePointerDown = () => setIsDragging(true)
    const handlePointerUp = () => {
      setIsDragging(false)
      idleRotation.current = 0
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (isDragging) {
        const rect = gl.domElement.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        const y = ((event.clientY - rect.top) / rect.height) * 2 - 1

        // Limit rotation to 90 degrees in each direction
        targetRotation.current = [
          Math.max(Math.min((y * Math.PI) / 4, Math.PI / 4), -Math.PI / 4),
          Math.max(Math.min((x * Math.PI) / 4, Math.PI / 4), -Math.PI / 4),
          0,
        ]
      }
    }

    const canvas = gl.domElement
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointercancel', handlePointerUp)

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointerup', handlePointerUp)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [gl, isDragging])

  useFrame((_, delta) => {
    if (!modelRef.current) return
    const clampedDelta = clampDelta(delta)

    // Update idle rotation
    idleRotation.current += clampedDelta * idleDirection.current
    if (Math.abs(idleRotation.current % Math.PI) > Math.PI / 2) {
      idleDirection.current *= -1
    }

    // Smoothly update current rotation
    const [targetX, targetY, targetZ] = targetRotation.current
    currentRotation.current[0] += (targetX - currentRotation.current[0]) * 0.1
    currentRotation.current[1] +=
      (!isDragging
        ? idleRotation.current * 0.0125
        : targetY - currentRotation.current[1]) * 0.1
    currentRotation.current[2] += (targetZ - currentRotation.current[2]) * 0.1

    // Apply rotation to the model
    modelRef.current.rotation.x = currentRotation.current[0]
    modelRef.current.rotation.y = currentRotation.current[1]
    modelRef.current.rotation.z = currentRotation.current[2]
  })

  return <primitive object={scene} ref={modelRef} />
}
