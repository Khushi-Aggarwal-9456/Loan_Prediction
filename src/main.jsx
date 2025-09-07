import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Frontend from './LoanPredictionFrontend/frontend.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frontend/>
  </StrictMode>,
)
