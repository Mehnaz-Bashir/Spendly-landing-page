function Insights() {
  const categories = [
    { name: 'Food & Dining', amount: '₹8,450', percentage: '42%' },
    { name: 'Shopping', amount: '₹5,200', percentage: '26%' },
    { name: 'Transport', amount: '₹3,850', percentage: '19%' },
    { name: 'Subscriptions', amount: '₹2,100', percentage: '13%' },
  ]

  return (
    <section className="insights-section" id="insights">
      <div className="insights-heading">
        <p className="section-eyebrow">Spending insights</p>

        <h2>
          Know where your money
          <span> is going.</span>
        </h2>

        <p>
          Turn everyday transactions into a clearer picture of your
          spending habits.
        </p>
      </div>

      <div className="insights-card">
        <div className="insights-card-header">
          <div>
            <p>This month</p>
            <h3>₹19,600</h3>
          </div>

          <span>Spending breakdown</span>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <div className="category-row" key={category.name}>
              <div className="category-info">
                <span>{category.name}</span>
                <strong>{category.amount}</strong>
              </div>

              <div className="category-progress">
                <div
                  className="category-bar"
                  style={{ width: category.percentage }}
                ></div>
              </div>

              <span className="category-percentage">
                {category.percentage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insights