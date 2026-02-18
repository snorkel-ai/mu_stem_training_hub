import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'
import { DISABLED_SECTION_IDS } from './components/Sidebar'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('welcome')

  useEffect(() => {
    if (DISABLED_SECTION_IDS.has(activeSection)) setActiveSection('welcome')
  }, [activeSection])

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <ContentArea activeSection={activeSection} />
      </div>
    </div>
  )
}

export default App
