import './Section.css'

function DosAndDonts() {
  return (
    <section className="section">
      <h2>Do's and Don'ts</h2>
      <div className="section-card">
        <h3>Best Practices</h3>
        <ul>
          <li>Use ASCII-only characters and LaTeX for math notation.</li>
          <li>Keep steps atomic and solutions process-focused.</li>
          <li>Match question complexity to the answer format.</li>
          <li>Write specific, verifiable rubrics and include a final-answer check.</li>
          <li>Separate references from summaries and use a standard format.</li>
        </ul>
      </div>
      <div className="section-card">
        <h3>Common Errors</h3>
        <ul>
          <li>Vague rubric language without clear correctness criteria.</li>
          <li>Questions overloaded with too many parts.</li>
          <li>Solutions that state outcomes without showing how to get them.</li>
          <li>Mixing references and summaries in the same field.</li>
        </ul>
      </div>
      <div className="section-card">
        <h3>What to Avoid</h3>
        <ul>
          <li>Non-ASCII symbols when LaTeX suffices.</li>
          <li>Multi-part questions that reduce verifiability.</li>
          <li>Rubrics that can’t distinguish good from bad answers.</li>
          <li>Mislabeling difficulty (e.g., “advanced” for basic content).</li>
        </ul>
      </div>
    </section>
  )
}

export default DosAndDonts
