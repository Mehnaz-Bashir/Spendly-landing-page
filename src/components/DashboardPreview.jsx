function DashboardPreview() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-heading">
        <p className="section-eyebrow">A clearer view of your money</p>

        <h2>
          Everything you need,
          <span> in one place.</span>
        </h2>
      </div>

      <div className="dashboard-card">
        <div className="dashboard-top">
          <div>
            <p className="dashboard-label">Total balance</p>
            <h3>₹84,250</h3>
          </div>

          <button className="period-button">This month ▾</button>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <span>Income</span>
            <strong>₹52,000</strong>
            <small>+8.4%</small>
          </div>

          <div className="stat-card">
            <span>Expenses</span>
            <strong>₹31,450</strong>
            <small>-4.2%</small>
          </div>

          <div className="stat-card">
            <span>Savings</span>
            <strong>₹20,550</strong>
            <small>+12.6%</small>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p>Spending overview</p>
              <strong>₹31,450</strong>
            </div>

            <span>Last 6 months</span>
          </div>

          <div className="chart">
            <div className="chart-line line-one"></div>
            <div className="chart-line line-two"></div>
            <div className="chart-line line-three"></div>
            <div className="chart-line line-four"></div>

            <div className="chart-bars">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreview