import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Web Vitals
import reportWebVitals from './reportWebVitals'
// Dev Tools
import installDevtools from '@layer0/devtools/install'
// Service Worker
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Console Log Web Vitals
reportWebVitals(console.log)

// Dev Tools
installDevtools()

// Register Service Worker
registerServiceWorker()
