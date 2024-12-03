import classNames from 'classnames'
import { Ribbon } from './Ribbon'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Token3d } from './Token3d'

function Stage() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <Token3d />
      <ambientLight intensity={0.5} />
      <Environment preset='sunset' background backgroundBlurriness={0.5} />
    </Canvas>
  )
}

export function AboutToken() {
  return (
    <div
      className={classNames(
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
        <div className='absolute bottom-0 inset-x-0 z-20 text-center p-10'>
          Community Token details coming soon
        </div>
      </div>
      <Ribbon type={1} />
    </div>
  )
}
