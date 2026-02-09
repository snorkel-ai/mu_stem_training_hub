import './Section.css'

function CommonErrors() {
  return (
    <section className="section">
      <h2>Common Errors</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">❌ Common Errors</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">Rubrics</h4>
          <ul>
            <li>Using vague language (e.g., “correctly applies”, “accurately demonstrates”, “properly proves”).</li>
            <li>Writing rubrics that only check for presence instead of correctness.</li>
            <li>Rubrics that imply only one valid path when multiple are acceptable.</li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Question Design</h4>
          <ul>
            <li>Overloading questions with too many parts (e.g., 7-part questions).</li>
            <li>Labeling questions as “advanced” when they test basic concepts.</li>
            <li>Forcing long-form solutions for questions suited to short answers.</li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Content Structure</h4>
          <ul>
            <li>Combining multiple steps into a single block of LLM-generated text.</li>
            <li>Providing solutions that state outcomes without explaining how to reach them.</li>
            <li>Mixing references and summaries into the same field.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CommonErrors
