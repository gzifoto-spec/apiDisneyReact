import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EffectsDemo from './EffectsDemo.jsx'

const isDemoMode = window.location.pathname === '/demo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isDemoMode ? <EffectsDemo /> : <App />}
  </StrictMode>,
)