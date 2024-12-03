import { AboutUs } from './AboutUs'
import { Masthead } from './Masthead'
import { AutoFontResizer } from './AutoFontResizer'
import { OurProjects } from './OurProjects'
import { Footer } from './Footer'
import { AboutToken } from './AboutToken'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Masthead />
        <AboutUs />
        <OurProjects />
        <AboutToken />
        <Footer />
      </div>
      <AutoFontResizer />
    </>
  )
}

export default App
