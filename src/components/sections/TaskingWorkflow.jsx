import './Section.css'

function TaskingWorkflow() {
  return (
    <section className="section">
      <h2>Tasking Workflow</h2>
      <div className="section-card">
        <p>Below is a summary of each stage in the Einstein STEM process overview.</p>
      </div>
      <div className="section-card">
        <h3>Original Submission</h3>
        <p><strong>Who:</strong> Expert task authors</p>
        <ul>
          <li>Create a complete task package using the required fields and instructions.</li>
          <li>Meet the in‑app difficulty evaluation before submission.</li>
        </ul>
        <div className="callout callout--info">
          After submission, the task moves to automated checks.
        </div>
      </div>
      <div className="section-card">
        <h3>Offline Evaluations</h3>
        <p><strong>Who:</strong> Automated systems</p>
        <ul>
          <li>Validate data file integrity and accessibility.</li>
          <li>Review reference solution completeness and coherence.</li>
          <li>Check rubric coverage and metadata alignment.</li>
          <li>Run automated scientific and citation sanity checks.</li>
        </ul>
        <div className="callout callout--info">
          Outcomes: Pass → advances, Fail → returns to author (up to 3 revisions).
        </div>
      </div>
      <div className="section-card">
        <h3>Preference Annotation</h3>
        <p><strong>Who:</strong> Expert reviewers</p>
        <ul>
          <li>Provide pass/fail judgements for a given question and two potential solutions, assessing whether they meet quality standards.</li>
          <li>
          Compare the two solutions across three dimensions:
          <ul>
            <li><strong>Technical Correctness</strong></li>
            <li><strong>Structure and Presentation</strong></li>
            <li><strong>Completeness and Instruction Following</strong></li>
          </ul>
        </li>
        <li>For each dimension, select one of: Solution A is better, Both solutions are equal, or Solution B is better.</li>
        </ul>
        <div className="callout callout--info">
          <strong>System actions:</strong> If the original solution passes all judgements and is equal to or better than the alternative solution across all dimensions → proceeds to Adjudication. If the original solution fails quality judgements or is worse than the alternative solution in any dimension → sent back to the original author for revision.
        </div>
      </div>
      <div className="section-card">
        <h3>Adjudication</h3>
        <p><strong>Who:</strong> Adjudicators</p>
        <ul>
          <li>Full quality review of task, data, solutions, checks, and preference notes.</li>
          <li>Consider any submitted disagreements.</li>
        </ul>
        <div className="callout callout--info">
          Outcomes: Accept → finalized, Revise → returned with feedback, Reject → removed.
        </div>
      </div>
    </section>
  )
}

export default TaskingWorkflow
