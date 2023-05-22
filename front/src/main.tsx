import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:uno.css'
import './index.css'
import { Root } from './pages/Root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
