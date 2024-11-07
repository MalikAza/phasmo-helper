import { createRoot } from 'react-dom/client'
import App from '@app/app'
import '@assets/styles/index.css'
import { StrictMode } from 'react'

const rootElement = document.getElementById('root')

createRoot(rootElement!)
.render(
  <StrictMode>
    <App />
  </StrictMode>
)