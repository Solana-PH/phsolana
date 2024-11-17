import { FacebookLogo, GithubLogo, XLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className='min-h-[20vh] w-full relative bg-black'>
      <div
        className='absolute inset-0 pointer-events-none opacity-20'
        style={{
          backgroundImage: 'url("/banig_up.svg")',
          backgroundPosition: 'top',
          backgroundRepeat: 'repeat-x',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'calc(min(16vw,16vh))',
        }}
      />
      <div className='absolute inset-0  px-5 md:px-20 max-w-7xl w-full mx-auto flex items-center justify-between h-full'>
        <div className='flex items-center gap-3'>
          <img src='/logo.svg' className='w-16 h-16 object-contain' />
          <span className='text-lg font-bold tracking-wide leading-6'>
            Solana Philippines
          </span>
        </div>
        <div>
          <ul className='flex flex-col gap-[1vh] px-3'>
            <li className='flex items-center gap-3'>
              <FacebookLogo size={'1.6em'} />
              <a
                href='https://www.facebook.com/groups/solanaphilippines'
                target='_blank'
                rel='noreferrer noopener'
              >
                Facebook
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <XLogo size={'1.6em'} />
              <a
                href='https://x.com/ph_solana'
                target='_blank'
                rel='noreferrer noopener'
                className='text-nowrap'
              >
                X (Twitter)
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <GithubLogo size={'1.6em'} />
              <a
                href='https://github.com/Solana-PH'
                target='_blank'
                rel='noreferrer noopener'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
