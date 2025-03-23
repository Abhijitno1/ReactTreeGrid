import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { TreeGridDemo } from './TreeGridDemo.jsx'
import { SyncFusionTreeGrid } from './SyncFusionTreeGrid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <SyncFusionTreeGrid />
  </StrictMode>,
)
