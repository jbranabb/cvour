import './App.css'
import Headers from './components/Headers'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import {Element}  from "react-scroll";

import { BackgroundBeams } from './components/ui/background-beams'
function App() {
  return (
    <div className="min-h-screen bg-black overflow-y-hidden w-full ">
    <BackgroundBeams className='absolute inset-0 pointer-events-none z-0 ' />
    <Element name='home'>
    <Headers></Headers>
    <Home />
    </Element> 
    <Element name='about'>
    <About />
    </Element> 
    <Element name='projects'>
    <Projects />
    </Element> 
    <Element name='contact'>
    <Contact />
    </Element> 
  </div> 
  )
}

export default App
