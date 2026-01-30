import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WrapperRouter from './App.jsx'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WrapperRouter/>
  </StrictMode>,
)
