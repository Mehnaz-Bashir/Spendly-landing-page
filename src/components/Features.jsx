function Features() {
  const features = [
    {
      number: '01',
      title: 'Track effortlessly',
      description:
        'Organize income and expenses without complicated spreadsheets.',
    },
    {
      number: '02',
      title: 'Understand your spending',
      description:
        'See where your money goes with clear visual insights.',
    },
    {
      number: '03',
      title: 'Build better habits',
      description:
        'Set goals and make consistent progress toward what matters.',
    },
  ]

  return (
    <section className="features-section" id="features">
      <div className="features-intro">
        <p className="section-eyebrow">Why Spendly</p>

        <h2>
          Less tracking.
          <span> More clarity.</span>
        </h2>

        <p>
          Spendly gives you a simpler way to understand your finances
          and stay in control of everyday decisions.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <span className="feature-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features