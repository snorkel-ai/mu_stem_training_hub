import './Section.css'
import prefPostAnnotationTime from '../../../images/pref_post_annotation_time.png'
import outcomePostAnnotation from '../../../images/outcome_postannotation.png'

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
          <p><strong>Please provide feedback on how the question could improve, if applicable.</strong></p>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step 2: Review Both Solutions</h4>
          <p>
            Before evaluating, make sure to click &quot;LaTeX Preview&quot; for both Solution A and
            Solution B to view the formatted solutions.
          </p>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step 3: Compare Solutions Across Three Dimensions</h4>
          <ol>
            <li>
              <strong>Structure and Presentation:</strong> Is the response clearly organized,
              well-formatted, and easy to follow?
            </li>
            <li>
              <strong>Technical Correctness:</strong> Are the methods, formulas, calculations, and
              reasoning accurate and sound?
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
            Review Solution A and evaluate if it is well structured and presented, technically
            correct, complete and answers the entirety of the question.
          </p>
          <ul>
            <li>
              <strong>Yes (Pass):</strong> The solution is well-structured, technically correct, and
              demonstrates complete understanding.
            </li>
            <li>
              <strong>No (Fail):</strong> The solution has significant issues - major errors,
              incomplete reasoning, or missing critical elements.
            </li>
          </ul>
          <p><strong>Please provide feedback on how Solution A could improve, if applicable.</strong></p>
          <p className="block-space-above"><strong>Is Solution B Well-Formed?</strong></p>
          <p>
            Review Solution B and evaluate if it is well structured and presented, technically
            correct, complete and answers the entirety of the question.
          </p>
          <ul>
            <li>
              <strong>Yes (Pass):</strong> The solution is well-structured, technically correct, and
              demonstrates complete understanding.
            </li>
            <li>
              <strong>No (Fail):</strong> The solution has significant issues - major errors,
              incomplete reasoning, or missing critical elements.
            </li>
          </ul>
          <p><strong>Please provide feedback on how Solution B could improve, if applicable.</strong></p>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Step 5: Post-Annotation</h4>
          <p><strong>Completion Time</strong></p>
          <p>
            Approximate the time it took you to complete the preference annotation step, in minutes.
          </p>
          <img
            className="image-centered"
            src={prefPostAnnotationTime}
            alt="Post Annotation: Preference Annotation and Adjudication time inputs"
          />
          <p><strong>Annotation Check</strong></p>
          <div className="callout callout--highlight">
            <p>
              ⚠️ <strong>IMPORTANT:</strong> Only run this check <strong>AFTER</strong> you have completed all
              evaluations above. Do not run this check until you are finished with Steps 1–4.{' '}
              Do not edit any of your previous answers after running the annotation check.
            </p>
          </div>
          <p><strong>Outcome</strong></p>
          <p>After running the annotation check, select the outcome exactly as shown by the system.</p>
          <ul>
            <li><strong>PASS</strong></li>
            <li><strong>NEEDS_REVISION</strong></li>
          </ul>
          <p><strong>Feedback</strong></p>
          <p>
            Under <strong>Feedback</strong>, copy and paste the exact text shown in the <strong>Evaluator box</strong> <em>after the colon</em> — it will follow the format:
          </p>
          <p className="feedback-format"><em>&quot;Question feedback: [Insert question feedback text]. Solution feedback: [Insert solution feedback text].&quot;</em></p>
          <div className="callout callout--highlight">
            <p>
              ⚠️ <strong>IMPORTANT:</strong> Copy the feedback from the <strong>Evaluator box</strong>, not from any other part of the form. The <strong>Evaluator box</strong> and the <strong>Feedback</strong> field may contain different text, always use what the <strong>Evaluator box</strong> instructs.
            </p>
          </div>
          <img
            className="image-centered image-space-above"
            src={outcomePostAnnotation}
            alt="Annotation Check outcome and feedback UI"
          />
        </div>
      </div>
    </section>
  )
}

export default PreferenceAnnotation
