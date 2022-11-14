import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { EtherProvider } from './contexts/EtherContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EtherProvider>
      <App />
    </EtherProvider>
  </React.StrictMode>
)
