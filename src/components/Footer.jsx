function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            Spendly
          </a>

          <p>
            Personal finance, made clear.
          </p>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#insights">Insights</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Spendly. All rights reserved.</p>

        <p>Built with React.</p>
      </div>
    </footer>
  )
}

export default Footer