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
        <p><strong>Who:</strong> Expert task authors.</p>
        <ul>
          <li>Create a complete task package using the required fields and instructions.</li>
          <li>Meet the in‑app difficulty evaluation before submission.</li>
        </ul>
        <div className="callout callout--info">
          After submission, the task moves to automated checks.
        </div>
      </div>
      <div className="section-card">
        <h3>Automated Checks</h3>
        <p><strong>Who:</strong> Automated systems.</p>
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
        <h3>Independent Submission</h3>
        <p><strong>Who:</strong> Independent expert (not the original author).</p>
        <ul>
          <li>Attempt the task using only the question and provided data files.</li>
          <li>Write step‑by‑step reasoning and a final answer in the required format.</li>
          <li>Note missing information, ambiguities, or inconsistencies if found.</li>
        </ul>
        <div className="callout callout--info">
          System checks for completeness, correctness, clarity, and rubric alignment.
        </div>
      </div>
      <div className="section-card">
        <h3>Solution Matching</h3>
        <p><strong>Who:</strong> Automated comparison (with optional author follow‑up).</p>
        <ul>
          <li>Compare the original reference solution with the independent solution.</li>
          <li>Short‑form: numeric tolerance, symbolic equivalence, or categorical match.</li>
          <li>Long‑form: compare key steps, claims, methods, and conclusions.</li>
        </ul>
        <div className="callout callout--info">
          Match → advances. Mismatch → returns for clarification and revision.
        </div>
      </div>
      <div className="section-card">
        <h3>Preference Annotation</h3>
        <p><strong>Who:</strong> Expert reviewer.</p>
        <ul>
          <li>Review three solutions presented in random order and choose one preferred answer.</li>
          <li>Prioritize: technical correctness, completeness/instruction following, structure/presentation.</li>
          <li>If none are acceptable, provide rationale and send back.</li>
        </ul>
        <div className="callout callout--info">
          System action: Accepted → adjudication. LLM chosen or none acceptable → revision.
        </div>
      </div>
      <div className="section-card">
        <h3>Adjudication</h3>
        <p><strong>Who:</strong> Adjudicators.</p>
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
