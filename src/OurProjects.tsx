import cn from 'classnames'
import { useRef, useState } from 'react'

export function OurProjects() {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScrollToIndex = (newIndex: number) => {
    const container = containerRef.current
    if (container) {
      const containerWidth = container.offsetWidth
      container.scrollTo({
        left: newIndex * containerWidth,
        behavior: 'smooth',
      })
      setIndex(newIndex)
    }
  }

  const handleScroll = () => {
    const container = containerRef.current
    if (container) {
      const containerWidth = container.offsetWidth
      const scrollLeft = container.scrollLeft
      const newIndex = Math.round(scrollLeft / containerWidth)
      setIndex(newIndex)
    }
  }

  return (
    <div className='flex flex-col bg-gradient-to-br from-orange-900 to-red-900 relative z-10 min-h-screen'>
      <div
        className='absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-25'
        style={{
          background:
            'url("/banig_up.svg") top repeat-x, url("/banig_down.svg") bottom repeat-x',
        }}
      />
      <div className={cn('flex flex-col')}>
        <h2
          className={cn(
            'font-bold text-2xl lg:text-5xl',
            'w-full max-w-7xl mx-auto',
            'pt-28 md:pt-40 pb-5 md:pb-10',
            'px-5 md:px-20'
          )}
        >
          What Are We Cooking?
        </h2>
        <div className={cn('relative', 'h-[60vh] w-full max-w-7xl mx-auto')}>
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className={cn(
              'w-full h-full',
              'px-5 md:px-20',
              'bg-yellow-500',
              'noscrollbar overflow-x-scroll',
              'snap-x snap-mandatory'
            )}
          >
            <div
              className={cn(
                'w-full h-full bg-green-500 relative',
                'flex overflow-visible'
              )}
            >
              <div
                className={cn(
                  'w-full h-full',
                  'bg-red-600 flex-shrink-0',
                  'snap-center'
                )}
              />
              <div
                className={cn(
                  'w-full h-full',
                  'bg-blue-600 flex-shrink-0',
                  'snap-center'
                )}
              />
              <div
                className={cn(
                  'w-full h-full',
                  'bg-teal-600 flex-shrink-0',
                  'snap-center'
                )}
              />
              <div
                className={cn(
                  'w-5 md:w-20 h-full',
                  'pointer-events-none flex-none'
                )}
              />
            </div>
          </div>
          <button
            className={cn(
              'w-5 md:w-20',
              'absolute inset-y-0 left-0 bg-purple-600'
            )}
            onClick={() => {
              index > 0 && handleScrollToIndex(index - 1)
            }}
          />
          <button
            className={cn(
              'w-5 md:w-20',
              'absolute inset-y-0 right-0 bg-pink-600'
            )}
            onClick={() => {
              index < 2 && handleScrollToIndex(index + 1)
            }}
          />
        </div>
      </div>
    </div>
  )
}
