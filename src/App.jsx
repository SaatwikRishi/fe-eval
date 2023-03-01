import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import ThemeState from './context/ThemeContext'
import ErrorPage from './pages/Error'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/Home'
import EventDetailsPage from './pages/EventDetails'
import '@fontsource/big-shoulders-display'
import '@fontsource/big-shoulders-text'
import '@fontsource/sofia-sans'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

function App () {
  return (
    <BrowserRouter>
      <ThemeState>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/error/:code?" element={<ErrorPage />} />
            <Route path="/events/:id" element={<EventDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </ThemeState>
    </BrowserRouter>
  )
}

export default App
