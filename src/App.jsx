import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <HowItWorks />
    </div>
  )
}

export default App