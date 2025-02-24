import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { TreeGridDemo } from './TreeGridDemo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <TreeGridDemo />
  </StrictMode>,
)
