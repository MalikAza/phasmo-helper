import { createRoot } from 'react-dom/client'
import App from '@app/app'
import Provider from '@app/provider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)
