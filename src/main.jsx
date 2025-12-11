import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MetaProvider } from './MetaContext'   // <-- you must create this file earlier

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <MetaProvider>   {/* This will load title, description, keywords dynamically */}
        <App />
      </MetaProvider>
    </BrowserRouter>
  </HelmetProvider>
)
