import './App.css'
import './reset.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'
import TakePhoto from './pages/TakePhoto'
import SelectFrame from './pages/SelectFrame'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/selectframe" element={<SelectFrame/>}/>
          <Route path="/takephoto" element={<TakePhoto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
