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
    <div
      className={cn(
        'flex flex-col relative z-10 min-h-screen',
        'justify-center',
        'bg-red-900'
        // 'bg-gradient-to-br from-orange-900 to-red-900 '
      )}
    >
      <div
        className='absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-25'
        style={{
          background:
            'url("/banig_up.svg") top repeat-x, url("/banig_down.svg") bottom repeat-x',
          backgroundSize: 'calc(min(16vw,16vh))',
        }}
      />
      <div className={cn('flex flex-col')}>
        <h2
          className={cn(
            'font-bold text-2xl lg:text-5xl',
            'w-full max-w-7xl mx-auto',
            'pb-5 xl:pb-10',
            'px-5 md:px-20'
          )}
        >
          What Are We Cooking?
        </h2>
        <div
          className={cn(
            'relative lg:text-xl',
            'h-[60vh] w-full max-w-7xl mx-auto'
          )}
        >
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className={cn(
              'w-full h-full',
              'px-10 md:px-28',
              'noscrollbar overflow-x-scroll',
              'snap-x snap-mandatory'
            )}
          >
            <div
              className={cn('w-full h-full relative', 'flex overflow-visible')}
            >
              <div
                className={cn(
                  'w-full h-full flex-shrink-0 snap-center flex flex-col gap-5 xl:gap-10',
                  'justify-center overflow-hidden'
                )}
              >
                <div className='flex portrait:flex-col'>
                  <div className='flex-1 hidden xl:flex'>
                    <img
                      src='/questboard_img.webp'
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div className='flex-1 flex flex-col gap-3 xl:gap-5 justify-center'>
                    <h2 className='font-bold text-2xl xl:text-4xl flex-none'>
                      QuestBoard
                    </h2>
                    <p>
                      QuestBoard is the first of many community-driven apps from
                      Solana PH.
                    </p>
                    <p>
                      Built on Solana, QuestBoard lets you post or find
                      “quests”—community service requests, skill exchanges,
                      project collaborations, and more—all in a decentralized,
                      secure ecosystem.
                    </p>
                    <p>
                      QuestBoard is designed to keep communication safe and
                      transparent, with fair dispute resolution, minimal fees,
                      and full open-source code.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={cn('w-full h-full', 'flex-shrink-0', 'snap-center')}
              ></div>
              <div
                className={cn('w-full h-full', 'flex-shrink-0', 'snap-center')}
              />
              <div
                className={cn(
                  'w-10 md:w-28 h-full',
                  'pointer-events-none flex-none'
                )}
              />
            </div>
          </div>
          <button
            className={cn('w-10 md:w-28', 'absolute inset-y-0 left-0')}
            style={{
              backgroundColor: 'transparent',
              backgroundImage:
                'radial-gradient(transparent 1px, rgb(127 29 29) 1px)',
              backgroundSize: '4px 4px',
              backdropFilter: 'blur(3px)',
              mask: 'linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.1) 100%)',
              opacity: 1,
            }}
            onClick={() => {
              index > 0 && handleScrollToIndex(index - 1)
            }}
          />
          <button
            className={cn('w-10 md:w-28', 'absolute inset-y-0 right-0')}
            onClick={() => {
              index < 2 && handleScrollToIndex(index + 1)
            }}
            style={{
              backgroundColor: 'transparent',
              backgroundImage:
                'radial-gradient(transparent 1px, rgb(127 29 29) 1px)',
              backgroundSize: '4px 4px',
              backdropFilter: 'blur(3px)',
              mask: 'linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.1) 100%)',
              opacity: 1,
            }}
          />
        </div>
      </div>
    </div>
  )
}
