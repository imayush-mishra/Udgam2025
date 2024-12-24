import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Start from './pages/Start.jsx'
import Speakers from './pages/Speakers.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
