import './App.css'
import { Route, Routes } from 'react-router-dom'
import Headers from './components/Headers'
function App() {
  return (
  <div className="min h-screen bg-black/75">
    <Headers></Headers>
    <Routes>
    <Route path='/' />
  </Routes>
  </div> 
  )
}

export default App
