import { AboutUs } from './AboutUs'
import { Masthead } from './Masthead'
import { AutoFontResizer } from './AutoFontResizer'
import { OurProjects } from './OurProjects'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Masthead />
        <AboutUs />
        <OurProjects />
      </div>
      <AutoFontResizer />
    </>
  )
}

export default App
