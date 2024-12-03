import classNames from 'classnames'
import { Ribbon } from './Ribbon'

export function AboutToken() {
  return (
    <div
      className={classNames(
        'flex flex-col relative z-10 min-h-screen',
        'justify-center',
        'bg-black'
      )}
    >
      <Ribbon type={0} />
      <div className='flex flex-auto'></div>
      <Ribbon type={1} />
    </div>
  )
}
