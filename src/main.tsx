import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa'
import App from './App'

// CSS DSFR
import '@codegouvfr/react-dsfr/main.css'

startReactDsfr({ defaultColorScheme: 'light' })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
