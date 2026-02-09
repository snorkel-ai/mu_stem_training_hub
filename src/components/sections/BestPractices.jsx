import './Section.css'

function BestPractices() {
  return (
    <section className="section">
      <h2>Best Practices</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">✅ Best Practices</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">Data & Formatting</h4>
          <ul>
            <li>Enforce ASCII-only characters.</li>
            <li>All mathematical notation should be reproducible via LaTeX.</li>
            <li>Add automatic validation checks to prevent invalid characters in datasets.</li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step Structure & Solutions</h4>
          <ul>
            <li>Steps must be atomic: one action, one idea, one verifiable outcome per step.</li>
            <li>Solutions should explain the process, not just state the final result.</li>
            <li>Use step-by-step intermediate states only when essential and verifiable.</li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Answers & Question Design</h4>
          <ul>
            <li>Short-form answers must end with a concise final answer.</li>
            <li>Match question complexity to format: basic → short-form, advanced → long-form.</li>
            <li>Prefer single-focus questions over multi-part ones to improve verifiability.</li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Rubrics</h4>
          <ul>
            <li>Rubrics must be specific, verifiable, and atomic.</li>
            <li>Always include a rubric item explicitly evaluating the final answer.</li>
            <li>Allow multiple valid solution paths when appropriate.</li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">References & Metadata</h4>
          <ul>
            <li>Keep references and reference summaries as separate fields.</li>
            <li>Use a standard format for references (e.g., APA).</li>
            <li>Tags are optional but strongly encouraged for discoverability.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BestPractices
