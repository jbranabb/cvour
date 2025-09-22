import './App.css'
import { Route, Routes } from 'react-router-dom'
import Headers from './components/Headers'
import Home from './components/Home'
function App() {
  return (
  <div className="min-h-screen bg-black overflow-y-hidden">
    <Headers></Headers>
    <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/aboutus' element={ <Home/> } />
  </Routes>
  </div> 
  )
}

export default App
