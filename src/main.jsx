import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Terms from './Terms.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import DataDeletion from './DataDeletion.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/termos' element={<Terms />} />
        <Route path='/politica-privacidade' element={<PrivacyPolicy />} />
        <Route path='/data-deletion' element={<DataDeletion />} />
      </Routes>
    </Router>
  </StrictMode>,
)
