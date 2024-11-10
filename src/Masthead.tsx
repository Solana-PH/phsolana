import cn from 'classnames'

export function Masthead() {
  return (
    <>
      <div className='w-full h-[75vh] flex flex-col sticky top-0 pointer-events-none'>
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
              'absolute inset-0 scale-150 translate-x-[calc(min(28vw,28vh))] translate-y-[20vh]',
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
              'absolute inset-0 translate-x-[calc(min(28vw,28vh))] translate-y-[20vh]',
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
      <div className='w-full h-[25vh] bg-gray-900 relative'>
        <div className='w-full h-[25vh] absolute -top-[12.5vh] overflow-visible'>
          <img src='/ribbon.svg' className='w-full h-full object-fill' />
        </div>
        <div
          className={cn(
            'absolute landscape:-top-[70vh] portrait:-top-[70vw] inset-x-0 flex justify-center overflow-hidden'
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
            'absolute -top-[67.5vh] inset-x-0 flex flex-col overflow-hidden p-[calc(min(5vw,5vh))]',
            'landscape:p-[calc(min(12.5vw,12.5vh))]'
          )}
        >
          <h1
            className='font-serif'
            style={{
              transform: 'rotateZ(5deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <span className='ml-[calc(min(5vw,5vh))] xl:text-7xl sm:text-6xl text-5xl stroked'>
              Tara na!
            </span>{' '}
            <br />
            <span className='xl:text-9xl sm:text-8xl text-7xl stroked-solana'>
              Solana
            </span>
            <br />
            <span className='ml-[calc(min(10vw,10vh))] xl:text-9xl sm:text-8xl text-7xl stroked-ph'>
              Pilipinas!
            </span>
          </h1>
        </div>
      </div>
    </>
  )
}
