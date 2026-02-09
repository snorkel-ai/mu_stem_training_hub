import './Section.css'

function WhatToAvoid() {
  return (
    <section className="section">
      <h2>What to Avoid</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">🚫 Things to Avoid</h3>
        <ul>
          <li>Non-ASCII characters when LaTeX is sufficient.</li>
          <li>Multi-part questions that are difficult to verify reliably.</li>
          <li>Rubrics that use undefined terms like “correctly”.</li>
          <li>Rubrics that cannot distinguish good answers from bad ones.</li>
          <li>Rubrics that enforce a single solution path unnecessarily.</li>
          <li>Generic rubrics that apply equally well to incorrect answers.</li>
          <li>Long-form answers when a short-form response is more appropriate.</li>
          <li>Misrepresenting difficulty level (e.g., calling basic SQL “advanced”).</li>
          <li>Underestimating authoring effort without corresponding quality.</li>
        </ul>
      </div>
    </section>
  )
}

export default WhatToAvoid
