import './App.css';
import React, { useEffect, useState } from 'react';
// In v6, Redirect => Navigate, Switch => Routes and component => element
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

// HP, PLP and PDP components
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductDescriptionPage from './pages/ProductDescriptionPage'

// Layer0
import { prefetch } from '@layer0/prefetch/window/prefetch'

// Using React Router V6 Syntax
function App() {

  const [mounted, setMounted] = useState('print')

  useEffect(() => {
    setMounted('all')

    // Register a listener for Service Worker messages to prefetch images for PLP and PDP
    const { serviceWorker } = navigator
    if (serviceWorker) {
      serviceWorker.addEventListener('messaeg', (event) => {
        console.log("EVENT: ", event)
        if (event.data.action === 'prefetch') {
          prefetch(event.data.url, event.data.as, event.data.options)
        }
      })
    }
  }, [mounted])

  return (
    <>
      <div className="header">
        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>Welcome</a>
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<ProductListingPage />} />
          <Route path="/product/:slug" element={<ProductDescriptionPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
