import './Section.css'

function ImportantRevisions() {
  return (
    <section className="section">
      <h2>Important: Revisions</h2>
      <div className="section-card">
        <h3>Within Phase 1 (Original Submission)</h3>
        <p>
          You can iterate and re-run evaluations as many times as you need to pass all blocking
          evaluations and address non-blocking warnings. These iterations do not count toward your
          revision limit.
        </p>
      </div>
      <div className="section-card">
        <h3>Across All Phases</h3>
        <p>
          Once your submission moves beyond Phase 1, you have a maximum of <strong>3 revisions total</strong>.
          If your submission is sent back for revisions from any later phase (Offline Evaluation,
          Preference Annotation, or Adjudication), each time counts as one revision. After 3 revisions
          across all phases, your submission will be automatically rejected from the dataset.
        </p>
      </div>
      <div className="section-card">
        <h3>Tip</h3>
        <p>
          Take your time in Phase 1 to get your submission right. Address all blocking failures and
          seriously consider fixing non-blocking warnings before proceeding. This reduces the chances
          you&apos;ll need revisions in later phases.
        </p>
      </div>
    </section>
  )
}

export default ImportantRevisions
