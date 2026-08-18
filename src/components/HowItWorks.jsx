function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Track your money',
      description:
        'Add your income and everyday expenses in one simple place.',
    },
    {
      number: '02',
      title: 'See the bigger picture',
      description:
        'Use clear summaries and spending insights to understand your habits.',
    },
    {
      number: '03',
      title: 'Take control',
      description:
        'Set goals, adjust your spending, and make decisions with more confidence.',
    },
  ]

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-heading">
        <p className="section-eyebrow">How it works</p>

        <h2>
          From spending
          <span> to clarity.</span>
        </h2>

        <p>
          Spendly keeps the process simple, so you can focus on
          understanding your money instead of managing spreadsheets.
        </p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <article className="step" key={step.number}>
            <div className="step-number">{step.number}</div>

            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks