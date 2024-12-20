import cn from 'classnames'

export function Masthead() {
  return (
    <>
      <div className='w-full h-[75vh] flex flex-col fixed inset-x-0 top-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 overflow-hidden'>
          <div
            className={cn(
              'absolute inset-0 translate-x-[calc(min(28vw,28vh))]',
              'landscape:translate-x-[calc(min(36vw,36vh))]',
              'scale-[1.8]'
            )}
            style={{
              background: 'url("/clouds.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            className={cn(
              'absolute inset-0 scale-150 translate-x-[calc(min(28vw,28vh))] translate-y-[30vh]',
              'landscape:translate-x-[calc(min(36vw,36vh))]',
              'flex items-center justify-center mix-blend-color'
            )}
          >
            <div className='animate-spin-slow'>
              <img className='scale-[1.5] opacity-80' src='/sun_ray.svg' />
            </div>
          </div>
          <div
            className={cn(
              'absolute inset-0 translate-x-[calc(min(28vw,28vh))] translate-y-[30vh]',
              'landscape:translate-x-[calc(min(36vw,36vh))]',
              'flex items-center justify-center'
            )}
          >
            <img
              className='landscape:h-[65vh] portrait:w-[65vw] aspect-square'
              src='/sun.svg'
            />
          </div>
        </div>
      </div>
      <div className='w-full h-[25vh] bg-gray-900 relative mt-[75vh] '>
        <div className='w-full h-[25vh] absolute -top-[12.5vh] overflow-visible pointer-events-none'>
          <img src='/flag.svg' className='w-full h-full object-fill' />
        </div>
        <div
          className={cn(
            'absolute landscape:-top-[70vh] portrait:-top-[70vw] inset-x-0 flex justify-center overflow-hidden pointer-events-none'
          )}
        >
          <img
            src='/cover.webp'
            className={cn(
              'landscape:h-[80vh] portrait:w-[80vw] object-fill translate-x-[calc(min(20vw,20vh))]',
              'landscape:translate-x-[calc(min(36vw,36vh))]'
            )}
          />
        </div>
        <div
          className={cn(
            'absolute inset-x-0 flex flex-col overflow-hidden py-[10vh]',
            'landscape:-top-[60vh] portrait:-top-[77.5vh] '
          )}
        >
          <div className='w-[95vw] max-w-7xl mx-auto '>
            <h1
              className={cn(
                'font-serif leading-none',
                'text-[calc(min(1.8vw,1.8vh))]'
              )}
              style={{
                transform: 'rotateZ(5deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <span
                className={cn('ml-[calc(min(5vw,5vh))] stroked', 'text-[6em]')}
              >
                Tara na!
              </span>{' '}
              <br />
              <span
                className={cn(
                  'ml-[calc(min(2.5vw,2.5vh))] stroked-solana',
                  'text-[10em]'
                )}
              >
                S<span className='text-teal-200'>o</span>l
                <span className='text-blue-200'>a</span>n
                <span className='text-purple-200'>a</span>
              </span>
              <br />
              <span
                className={cn(
                  'ml-[calc(min(10vw,10vh))] stroked-ph',
                  'text-[10em]'
                )}
              >
                <span className='text-blue-200'>P</span>ili
                <span className='text-red-200'>pi</span>
                <span className='text-yellow-200'>n</span>as!
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
