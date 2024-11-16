import cn from 'classnames'

export function OurProjects() {
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
            'pt-24 md:pt-40 pb-5 md:pb-10',
            'px-5 md:px-20'
          )}
        >
          What Are We Cooking?
        </h2>
        <div
          className={cn(
            'h-[60vh] w-full max-w-7xl mx-auto',
            'px-5 md:px-20',
            'bg-yellow-500',
            'overflow-x-auto'
          )}
        >
          <div
            className={cn(
              'w-full h-full bg-green-500 relative',
              'flex overflow-visible'
            )}
          >
            <div className={cn('w-full h-full', 'bg-red-600 flex-none')} />
            <div className={cn('w-full h-full', 'bg-blue-600 flex-none')} />
            <div className={cn('w-full h-full', 'bg-teal-600 flex-none')} />
            <div
              className={cn(
                'w-5 md:w-20 h-full',
                'pointer-events-none flex-none'
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
