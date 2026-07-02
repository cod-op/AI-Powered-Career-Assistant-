import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

export const server="http://localhost:11000"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <GoogleOAuthProvider clientId="47353063596-jlnqm1s5mms88agte767bi36e0rdm3ps.apps.googleusercontent.com">
         <App />
      </GoogleOAuthProvider>  
    </AppProvider>
  </StrictMode>,
)
