import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import HomePage from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
