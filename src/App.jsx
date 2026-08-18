import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
    </div>
  )
}

export default App