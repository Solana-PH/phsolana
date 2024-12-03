import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

export function Token3d() {
  const { scene } = useGLTF('/coin.glb')
  const modelRef = useRef<THREE.Group>(null!)
  const { size } = useThree()
  const [isDragging, setIsDragging] = useState(false)
  const [targetRotation, setTargetRotation] = useState<
    [number, number, number]
  >([0, 0, 0])
  const currentRotation = useRef<[number, number, number]>([0, 0, 0])
  const idleRotation = useRef<number>(-Math.PI / 2)
  const idleDirection = useRef<number>(1)

  useEffect(() => {
    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = () => {
      setIsDragging(false)
      idleRotation.current = 0
      setTargetRotation([0, 0, 0]) // Reset rotation when mouse is released
    }
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const x = (event.clientX / size.width) * 2 - 1
        const y = (event.clientY / size.height) * 2 - 1

        // Limit rotation to 90 degrees in each direction
        const rotX = Math.max(
          Math.min((y * Math.PI) / 4, Math.PI / 4),
          -Math.PI / 4
        )
        const rotY = Math.max(
          Math.min((x * Math.PI) / 4, Math.PI / 4),
          -Math.PI / 4
        )

        setTargetRotation([rotX, rotY, 0])
      }
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [size, isDragging])

  useFrame((_, delta) => {
    if (modelRef.current) {
      idleRotation.current += delta * idleDirection.current

      if (Math.abs(idleRotation.current) > Math.PI / 2) {
        idleDirection.current *= -1
      }

      currentRotation.current[0] +=
        (targetRotation[0] - currentRotation.current[0]) * 0.1
      currentRotation.current[1] +=
        (!isDragging
          ? idleRotation.current * 0.0125
          : targetRotation[1] - currentRotation.current[1]) * 0.1
      currentRotation.current[2] +=
        (targetRotation[2] - currentRotation.current[2]) * 0.1

      modelRef.current.rotation.x = currentRotation.current[0]
      modelRef.current.rotation.y = currentRotation.current[1]
      modelRef.current.rotation.z = currentRotation.current[2]
    }
  })

  return <primitive object={scene} ref={modelRef} />
}
