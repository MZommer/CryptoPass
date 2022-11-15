import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { EtherProvider } from './contexts/EtherContext';
import { EventsProvider } from './contexts/EventsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EtherProvider>
      <EventsProvider>
        <App />
      </EventsProvider>
    </EtherProvider>
  </React.StrictMode>
)
