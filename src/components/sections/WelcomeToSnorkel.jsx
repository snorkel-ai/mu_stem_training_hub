import './Section.css'

function WelcomeToSnorkel() {
  return (
    <section className="section">
      <h2>Welcome to Snorkel</h2>
      <div className="section-card hero-card">
        <p>
          Welcome to the Einstein STEM Knowledge Hub. This guide helps you get set up quickly,
          understand how tasks flow, and learn the standards for high‑quality submissions.
        </p>
      </div>
      <div className="section-card">
        <h3>Experts Portal</h3>
        <p>
          Access the platform at{' '}
          <a className="inline-link" href="https://experts.snorkel-ai.com/home" target="_blank" rel="noreferrer">
            https://experts.snorkel-ai.com/home
          </a>
          .
        </p>
        <ul>
          <li>Project name: <strong>einstein_stem</strong></li>
          <li>Task nodes: Original Submission, Independent Submission, Preference Annotation, Adjudication</li>
        </ul>
      </div>
      <div className="section-card">
        <h3>Slack</h3>
        <p>Join the Snorkel Expert Contributors workspace for updates and support.</p>
        <ul>
          <li>Channel: <strong>#einstein-submission</strong></li>
        </ul>
      </div>
      <div className="section-card">
        <h3>Pay at Snorkel</h3>
        <p>
          ✅ <strong>Only ACCEPTED tasks are paid</strong> for <strong>einstein_stem</strong>.
          Submitting during the tasking period does not guarantee payment in that cycle.
        </p>
        <ul>
          <li>Accepted by Snorkel Ops or Adjudication → paid in that acceptance cycle.</li>
          <li>Not accepted → paid when the task is accepted in a later cycle.</li>
        </ul>
        <p>
          Sample cycle: Tasking <strong>6–12</strong>, Validation <strong>13–16</strong>,
          Pay sent <strong>16</strong>, Pay received <strong>18</strong>.
        </p>
      </div>
    </section>
  )
}

export default WelcomeToSnorkel
