function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Spendly
      </a>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#insights">Insights</a>
      </div>

      <button className="nav-button">
        Get started →
      </button>
    </nav>
  )
}

export default Navbar