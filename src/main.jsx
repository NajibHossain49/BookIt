import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookItLandingPage from './pages/BookItLandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookItLandingPage />
  </StrictMode>,
)
