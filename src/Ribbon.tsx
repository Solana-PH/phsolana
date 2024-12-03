export function Ribbon({ type }: { type: number }) {
  return (
    <div
      className='h-[calc(min(8vw,8vh))] flex-none relative'
      style={{
        background: `url("/ribbon_${type === 0 ? 'blue' : 'red'}.webp")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat-x',
        backgroundPositionX: type === 0 ? 0 : '-50%',
      }}
    >
      <div
        className='absolute inset-x-0 -top-[calc(min(1vw,1vh))] h-[calc(min(2vw,2vh))] pointer-events-none'
        style={{
          background: 'url("/thread_1.webp")',
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
        }}
      />
      <div
        className='absolute inset-x-0 -bottom-[calc(min(1vw,1vh))] h-[calc(min(2vw,2vh))] pointer-events-none'
        style={{
          background: 'url("/thread_1.webp")',
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
        }}
      />
    </div>
  )
}
