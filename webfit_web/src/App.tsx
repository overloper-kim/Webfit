import './App.css'
import './reset.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'
import Noori from './pages/Noori'
import TakePhoto from './pages/TakePhoto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/noori" element={<Noori/>}/>
          <Route path="/takephoto" element={<TakePhoto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
