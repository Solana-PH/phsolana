export function AboutUs() {
  return (
    <div className='flex flex-col bg-gray-900 relative'>
      <div className='grid grid-cols-12 p-10 md:p-20 pt-0'>
        <div className='col-span-12 sm:col-span-7 flex flex-col gap-5 h-full justify-center'>
          <h2 className='font-bold text-2xl lg:text-5xl'>
            About <wbr />
            Solana Philippines
          </h2>
          <p className='lg:text-2xl'>
            Founded during the Bear Market in June 2022, Solana Philippines has
            become the central hub for Filipino Solana enthusiasts—developers,
            traders, creators, and curious newcomers alike.
          </p>
          <p className='lg:text-2xl'>
            We’re passionate about building a thriving, inclusive community
            where everyone can explore the power of blockchain technology and
            Web3 in a uniquely Pinoy way. From collaborative learning to
            hands-on projects, we’re here to make blockchain accessible,
            meaningful, and, yes—fun!
          </p>
        </div>
        <div className='col-span-12 sm:col-span-5 flex flex-col gap-5 h-full items-center'>
          <img
            src='/logo.svg'
            className='w-full max-w-sm aspect-square object-contain'
          />
        </div>
      </div>
    </div>
  )
}
