import { AboutUs } from './AboutUs'
import { Masthead } from './Masthead'
import { AutoFontResizer } from './AutoFontResizer'
import { OurProjects } from './OurProjects'
import { Footer } from './Footer'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Masthead />
        <AboutUs />
        <OurProjects />
        <Footer />
      </div>
      <AutoFontResizer />
    </>
  )
}

export default App
