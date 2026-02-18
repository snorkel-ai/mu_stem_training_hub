import './Section.css'
import prefPostAnnotationTime from '../../../images/pref_post_annotation_time.png'

function PreferenceAnnotation() {
  return (
    <section className="section">
      <h2>Preference Annotation</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">✅ Preference Annotation</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step 1: Evaluate the Question</h4>
          <p><strong>Is the Question Well-Formed?</strong></p>
          <p>
            Review the question and determine if it belongs to the given domain and subdomain, is
            fully self-contained (does not require tools or knowledge outside of the optionally
            provided file and expert domain knowledge), and requires multi-step reasoning to solve.
          </p>
          <ul>
            <li>
              <strong>Yes (Pass):</strong> The question is well-written, provides all necessary
              information, adequate multi-step reasoning, and is appropriate for the domain.
            </li>
            <li>
              <strong>No (Fail):</strong> The question has issues—ambiguous wording, missing
              context, single-step reasoning, or unclear requirements.
            </li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step 2: Review Both Solutions</h4>
          <p>
            Before evaluating, make sure to click &quot;LaTeX Preview&quot; for both Response A and
            Response B to view the formatted solutions.
          </p>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step 3: Compare Solutions Across Three Dimensions</h4>
          <ol>
            <li>
              <strong>Technical Correctness:</strong> Are the methods, formulas, calculations, and
              reasoning accurate and sound?
            </li>
            <li>
              <strong>Structure and Presentation:</strong> Is the response clearly organized,
              well-formatted, and easy to follow?
            </li>
            <li>
              <strong>Completeness and Instruction Following:</strong> Does the response fully
              address all parts of the question and follow any specific instructions?
            </li>
          </ol>
          <p><strong>For Each Dimension, Select:</strong></p>
          <ul>
            <li>Solution A is better</li>
            <li>Both solutions are equal</li>
            <li>Solution B is better</li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step 4: Evaluate Each Solution</h4>
          <p><strong>Is Solution A Well-Formed?</strong></p>
          <p>
            Review Solution A and evaluate if it is technically correct, well structured and
            presented, complete and answers the entirety of the question.
          </p>
          <ul>
            <li>
              <strong>Yes (Pass):</strong> The solution is technically correct, well-structured, and
              demonstrates complete understanding.
            </li>
            <li>
              <strong>No (Fail):</strong> The solution has significant issues—major errors,
              incomplete reasoning, or missing critical elements.
            </li>
          </ul>
          <p>Please provide feedback on how Solution A could improve, if applicable.</p>
          <p><strong>Is Solution B Well-Formed?</strong></p>
          <p>
            Review Solution B and evaluate if it is technically correct, well structured and
            presented, complete and answers the entirety of the question.
          </p>
          <ul>
            <li>
              <strong>Yes (Pass):</strong> The solution is technically correct, well-structured, and
              demonstrates complete understanding.
            </li>
            <li>
              <strong>No (Fail):</strong> The solution has significant issues—major errors,
              incomplete reasoning, or missing critical elements.
            </li>
          </ul>
          <p>Please provide feedback on how Solution B could improve, if applicable.</p>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step 5: Post-Annotation</h4>
          <p><strong>Completion Time</strong></p>
          <p>
            Approximate the time it took you to complete the preference annotation step, in
            minutes. In the platform, under Post Annotation, enter how many minutes it took you to
            complete the Preference Annotation task (the Adjudication time field is not used for
            this step).
          </p>
          <img
            className="image-wide"
            src={prefPostAnnotationTime}
            alt="Post Annotation: Preference Annotation and Adjudication time inputs"
          />
          <div className="callout callout--highlight">
            <p><strong>Annotation Check</strong></p>
            <p>
              <strong>IMPORTANT:</strong> Only run this check AFTER you have completed all
              evaluations above. Do not run this check until you are finished with Steps 1–4.{' '}
              <strong>Do not edit any of your previous answers after running the annotation check.</strong>
            </p>
            <p>
              After running the annotation check, select the outcome indicated by the system:
            </p>
            <ul>
              <li><strong>PASS</strong></li>
              <li><strong>NEEDS_REVISION</strong></li>
            </ul>
            <p>Select the outcome exactly as shown by the annotation check results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreferenceAnnotation
