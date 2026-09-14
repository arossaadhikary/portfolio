import './App.css'

// separating into real pages w/ React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavigationBar from './pages/NavigationBar'
import Intro from './pages/Intro'
import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        {/* possibly missing something here w/ the abt section check later */}
        <Route path = "/about" element = {<Intro />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/experiences" element = {<Experiences />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>

      <Footer />
    
    </BrowserRouter>
  )
}

export default App
