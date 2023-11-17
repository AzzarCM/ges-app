import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GesApp } from './GesApp.jsx'
import ScrollToAnchor from './ScrollToAnchor.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToAnchor/>
      <GesApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
