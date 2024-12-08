import cn from 'classnames'
import { Ribbon } from './Ribbon'
import { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Token3d } from './Token3d'
import { PerspectiveCamera } from 'three'

function ResponsiveCamera() {
  const { camera, size } = useThree()
  const aspectRatio = size.width / size.height

  useEffect(() => {
    const fov = 50

    if ((camera as PerspectiveCamera).isPerspectiveCamera) {
      const perspectiveCamera = camera as PerspectiveCamera
      perspectiveCamera.fov = fov
      perspectiveCamera.updateProjectionMatrix()
    }

    const panFactor = 1.5

    if (aspectRatio > 1) {
      camera.position.set(-aspectRatio / panFactor, 0, 3.5)
      camera.lookAt(-aspectRatio / panFactor, 0, 0)
    } else {
      camera.position.set(0, -1 / (aspectRatio * panFactor * 1.5), 5)
      camera.lookAt(0, -1 / (aspectRatio * panFactor * 1.5), 0)
    }
  }, [aspectRatio, camera])

  return null
}

function Stage() {
  return (
    <Canvas>
      <ResponsiveCamera />
      <Token3d />
      <ambientLight intensity={0.5} />
      <Environment preset='sunset' background backgroundBlurriness={0.5} />
    </Canvas>
  )
}

export function AboutToken() {
  return (
    <div
      className={cn(
        'flex flex-col relative z-30 min-h-screen',
        'justify-center',
        'bg-black'
      )}
    >
      <Ribbon type={0} />
      <div className='flex flex-auto relative'>
        <div className='absolute inset-0 z-10'>
          <Suspense fallback={null}>
            <Stage />
          </Suspense>
        </div>
        <div
          className={cn(
            'absolute inset-0 z-20',
            'pointer-events-none',
            'bg-gradient-to-t landscape:bg-gradient-to-r',
            'from-black/50 via-black/0 to-black/0'
          )}
        >
          <div
            className={cn(
              'h-full',
              'w-full max-w-7xl mx-auto',
              'flex flex-col-reverse landscape:flex-row'
            )}
          >
            <div className='select-none pointer-events-auto flex-1 shrink-0 landscape:pl-20 portrait:lg:px-20 portrait:px-10 flex flex-col justify-center'>
              <h2 className='font-bold text-2xl lg:text-5xl mb-4 portrait:mb-2'>
                $SOLANAOL
              </h2>
              <p className='lg:text-xl font-bold mb-10 portrait:mb-5'>
                The Solana PH DAO Token – Fueling Our Community
              </p>
              <p className='lg:text-xl mb-10 portrait:hidden'>
                Use $SOLANAOL to vote on QuestBoard disputes, drive growth,
                stake for voting power, and join exclusive events in Solana PH.
              </p>
              <p className='lg:text-xl italic'>Coming Soon!</p>
            </div>
            <div className='flex-1 shrink-0' />
          </div>
        </div>
      </div>
      <Ribbon type={1} />
    </div>
  )
}
