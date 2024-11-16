export function OurProjects() {
  return (
    <div className='flex flex-col bg-orange-900 relative z-10 pb-40 min-h-screen'>
      <div
        className='absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-25'
        style={{
          background:
            'url("/banig_up.svg") top repeat-x, url("/banig_down.svg") bottom repeat-x',
        }}
      />
      <div className='grid grid-cols-12 p-5 md:p-20 w-full max-w-7xl mx-auto'>
        <div className='col-span-12 sm:col-span-6 flex flex-col gap-5 md:gap-10 h-full'>
          <h2 className='font-bold text-2xl lg:text-5xl pt-24'>
            What Are We Cooking?
          </h2>
        </div>
      </div>
    </div>
  )
}
