import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Insights from './components/Insights'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <Insights />
      <FinalCTA />
    </div>
  )
}

export default App