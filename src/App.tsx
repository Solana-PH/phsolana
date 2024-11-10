import { AboutUs } from './AboutUs'
import { Masthead } from './Masthead'
import { AutoFontResizer } from './AutoFontResizer'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Masthead />
        <AboutUs />
      </div>
      <AutoFontResizer />
    </>
  )
}

export default App
