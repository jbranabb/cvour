import './App.css'
import { Route, Routes } from 'react-router-dom'
import Headers from './components/Headers'
import Home from './components/Home'
import { BackgroundBeams } from './components/ui/background-beams'
function App() {
  return (
    <div className="min-h-screen bg-black overflow-y-hidden w-full ">
    <BackgroundBeams className='absolute inset-0 pointer-events-none z-0 ' />
    <Headers></Headers>
    <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/aboutus' element={ <Home/> } />
  </Routes>
  </div> 
  )
}

export default App
