function App() {
  return (
    <div className='min-h-screen h-full flex flex-col gap-5 p-5 items-center justify-center'>
      <img
        src='/logo.svg'
        alt='Solana PH'
        className='w-16 h-16 object-contain'
      />
      <h1 className='text-2xl'>Solana Philippines</h1>
      <p>
        Website under maintenance. Visit our{' '}
        <a
          href='https://www.facebook.com/groups/solanaphilippines'
          className='underline'
        >
          community on Facebook
        </a>
        .
      </p>
    </div>
  )
}

export default App
