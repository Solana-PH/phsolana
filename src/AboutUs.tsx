import cn from 'classnames'

export function AboutUs() {
  return (
    <div className='flex flex-col bg-gray-900 relative z-10 pb-40 '>
      <div className='grid grid-cols-12 p-5 md:p-20 pt-0 w-full max-w-7xl mx-auto'>
        <div className='col-span-12 sm:col-span-6 flex flex-col gap-5 md:gap-10 h-full'>
          <h2 className='font-bold text-2xl lg:text-5xl'>Who Are We?</h2>
          <p className='lg:text-xl'>
            Founded during the Bear Market in June 2022, Solana Philippines has
            become the central hub for Filipino Solana enthusiasts—developers,
            traders, creators, and curious newcomers alike.
          </p>
          <img
            src='/tvs.webp'
            className='sm:hidden w-full aspect-square object-contain'
          />
          <p className='lg:text-xl'>
            We’re passionate about building a thriving, inclusive community
            where everyone can explore the power of blockchain technology and
            Web3 in a uniquely Pinoy way. From collaborative learning to
            hands-on projects, we’re here to make blockchain accessible,
            meaningful, and, yes—fun!
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
        <div className='hidden sm:flex sm:col-span-6 flex-col gap-5 h-full items-center'>
          <img
            src='/tvs.webp'
            className='w-full aspect-square object-contain'
          />
        </div>
      </div>
    </div>
  )
}
