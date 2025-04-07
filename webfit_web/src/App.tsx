import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'
import Noori from './pages/Noori'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/noori" element={<Noori/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
