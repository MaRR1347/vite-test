import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Register from './pages/Register.jsx'
import Ladder from './pages/Ladder.jsx'
import Rules from './pages/Rules.jsx'
import Info from './pages/Info.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='/rejestracja' element={<Register/>} />
        <Route path='/harmonogram' element={<Ladder/>} />
        <Route path='/zasady' element={<Rules/>} />
        <Route path='/regulamin' element={<Info/>} />
      </Routes>
     </BrowserRouter>
  </StrictMode>,
)
