import {
  CaretLeft,
  CaretRight,
  GithubLogo,
  LinkSimple,
} from '@phosphor-icons/react'
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

  const debounce = useRef(-1)
  const handleScroll = () => {
    const container = containerRef.current
    if (container) {
      const containerWidth = container.offsetWidth
      const scrollLeft = container.scrollLeft
      if (debounce.current) {
        clearTimeout(debounce.current)
      }
      debounce.current = setTimeout(() => {
        const newIndex = Math.round(scrollLeft / containerWidth)
        setIndex(newIndex)
      }, 100)
    }
  }

  return (
    <div
      className={cn(
        'flex flex-col relative z-10 min-h-screen',
        'justify-center',
        'bg-red-900'
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
      <div className={cn('flex flex-col gap-5')}>
        <h2
          className={cn(
            'font-bold text-2xl lg:text-5xl',
            'w-full max-w-7xl mx-auto',
            'px-5 md:px-20'
          )}
        >
          What Are We Cooking?
        </h2>
        <div
          className={cn(
            'relative lg:text-xl',
            'h-[65vh] w-full max-w-7xl mx-auto'
          )}
        >
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className={cn(
              'w-full h-full',
              'px-10 md:px-28',
              'noscrollbar overflow-x-scroll overflow-y-hidden',
              'snap-x snap-mandatory'
            )}
          >
            <div
              className={cn('w-full h-full relative', 'flex overflow-visible')}
            >
              <div
                className={cn(
                  'w-full h-full flex-shrink-0 snap-center flex flex-col gap-5 xl:gap-10',
                  'justify-center overflow-visible pr-5'
                )}
              >
                <div className='flex portrait:flex-col gap-5 min-h-[80%]'>
                  <div className='flex-1 hidden xl:flex relative pointer-events-none'>
                    <img
                      src='/paint1.webp'
                      className='-rotate-90 brightness-150 w-full h-full object-contain absolute inset-0 scale-[1.35]'
                    />
                    <img
                      src='/questboard_img.webp'
                      className='relative w-full h-full object-contain'
                    />
                  </div>
                  <div className='relative flex-1 flex flex-col gap-[3vh] xl:gap-10 justify-center'>
                    <h2 className='font-bold text-2xl xl:text-4xl flex-none'>
                      <span className='flex gap-5 items-center'>
                        <img
                          src='/questboard_logo.svg'
                          className='w-12 h-12 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-xl p-1 shadow-md'
                        />
                        <span>QuestBoard</span>
                      </span>
                    </h2>

                    <p>
                      QuestBoard lets you post or find “quests”—community
                      service requests, skill exchanges, project collaborations,
                      and more.
                    </p>
                    <p>
                      QuestBoard is designed to keep communication safe and
                      transparent, with fair dispute resolution, minimal fees,
                      and full open-source code.
                    </p>
                    <span className='flex items-center justify-between mt-auto'>
                      <span className='flex gap-5'>
                        <a
                          href='https://github.com/Solana-PH/QuestBoard'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <GithubLogo size={'1.6em'} />
                        </a>
                        <a
                          href='https://solanaph.quest/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <LinkSimple size={'1.6em'} />
                        </a>
                      </span>
                      <span className='italic text-sm'>In Development</span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  'w-full h-full flex-shrink-0 snap-center flex flex-col gap-5 xl:gap-10',
                  'justify-center overflow-visible pr-5'
                )}
              >
                <div className='flex portrait:flex-col gap-5 min-h-[80%]'>
                  <div className='flex-1 hidden xl:flex relative pointer-events-none'>
                    <img
                      src='/paint1.webp'
                      className='brightness-150 w-full h-full object-contain absolute inset-0 scale-[1.35]'
                    />
                    <img
                      src='/trinexus_img.webp'
                      className='w-full h-full object-contain relative'
                    />
                  </div>
                  <div className='relative flex-1 flex flex-col gap-[3vh] xl:gap-10 justify-center'>
                    <h2 className='font-bold text-2xl xl:text-4xl flex-none'>
                      <span className='flex gap-5 items-center'>
                        <img
                          src='/trinexus_logo.png'
                          className='w-12 h-12 bg-gradient-to-tr from-black to-blue-900 rounded-xl p-2 shadow-md'
                        />
                        <span>DeezQuest: TriNexus</span>
                      </span>
                    </h2>
                    <p>
                      DeezQuest: TriNexus is a puzzle RPG on Solana, featuring
                      PvP and PvE modes. Its open-source nature invites
                      community involvement from Solana PH.
                    </p>
                    <p>
                      For Solana PH token holders, it's a chance to influence
                      and benefit from the game. Token holders help decide how
                      income is used, ensuring growth benefits the community.
                    </p>
                    <span className='flex items-center justify-between mt-auto'>
                      <span className='flex gap-5'>
                        <a
                          href='https://github.com/val-samonte/dq'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <GithubLogo size={'1.6em'} />
                        </a>
                        <a
                          href='https://deez.quest/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <LinkSimple size={'1.6em'} />
                        </a>
                      </span>
                      <span className='italic text-sm'>In Development</span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  'w-full h-full flex-shrink-0 snap-center flex flex-col gap-5 xl:gap-10',
                  'justify-center overflow-visible relative'
                )}
              >
                <img
                  src='/paint1.webp'
                  className='-rotate-45 w-full h-full object-contain absolute inset-0 pointer-events-none'
                />
                <div className='flex flex-col gap-5 xl:gap-10 relative text-center items-center px-5'>
                  <h2
                    className={cn(
                      'font-serif leading-none',
                      'text-[calc(min(1.8vw,1.8vh))]'
                    )}
                  >
                    <span className='stroked text-[6em]'>
                      More Coming Soon!
                    </span>
                  </h2>
                  <p className='max-w-4xl'>
                    More community apps are coming soon, ranging from tools and
                    games to social platforms, each contributing to a thriving,
                    user-owned digital space.
                  </p>
                  <p className='max-w-4xl'>
                    We can’t wait to build this exciting future together with
                    you!
                  </p>
                  <a
                    href='https://www.facebook.com/groups/solanaphilippines'
                    target='_blank'
                    rel='noreferrer noopener'
                    className={cn(
                      'text-center',
                      'sm:w-fit lg:text-2xl px-5 py-3',
                      'text-black bg-yellow-500 border-t-2 border-l-2 border-4 border-black',
                      'font-bold hover:bg-yellow-200'
                    )}
                  >
                    Join Our Community!
                  </a>
                </div>
              </div>
              <div
                className={cn(
                  'w-10 md:w-28 h-full',
                  'pointer-events-none flex-none'
                )}
              />
            </div>
          </div>
          <button
            className={cn(
              'w-10 md:w-28',
              'absolute inset-y-0 left-0',
              'flex items-center justify-center outline-none'
            )}
            style={{
              backgroundColor: 'transparent',
              backgroundImage:
                'radial-gradient(transparent 1px, rgb(127 29 29) 1px)',
              backgroundSize: '0.25em 0.25em',
              backdropFilter: 'blur(0.2em)',
              mask: 'linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.5) 100%)',
              opacity: 1,
            }}
            onClick={() => {
              index > 0 && handleScrollToIndex(index - 1)
            }}
          >
            {index > 0 && <CaretLeft size={'1.6em'} />}
          </button>
          <button
            className={cn(
              'w-10 md:w-28',
              'absolute inset-y-0 right-0',
              'flex items-center justify-center outline-none'
            )}
            onClick={() => {
              index < 2 && handleScrollToIndex(index + 1)
            }}
            style={{
              backgroundColor: 'transparent',
              backgroundImage:
                'radial-gradient(transparent 1px, rgb(127 29 29) 1px)',
              backgroundSize: '4px 4px',
              backdropFilter: 'blur(3px)',
              mask: 'linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.5) 100%)',
              opacity: 1,
            }}
          >
            {index < 2 && <CaretRight size={'1.6em'} />}
          </button>
        </div>
      </div>
    </div>
  )
}
