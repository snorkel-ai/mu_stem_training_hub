import './Section.css'

function Adjudication({ setActiveSection }) {
  return (
    <section className="section">
      <h2>Adjudication</h2>
      <div className="section-card">
        <h3>Purpose and Role</h3>
        <p>The adjudicator is an independent expert who serves as the final quality gate in the Einstein workflow, synthesizing all prior evaluations, annotations, and feedback to make the authoritative determination on whether a datapoint is accepted, sent back for revision, or rejected.</p>
        <div className="callout callout--highlight">
          <p>⚠️ <strong>IMPORTANT:</strong> This is not meant to be a quick task, this is an in-depth, detailed, slow review of every facet of the submission to ensure it meets the quality standards of the project.</p>
        </div>
      </div>
      <div className="section-card">
        <h3>Previous Phases / Submission Components</h3>
        <p>During the adjudication step, you will be able to view the following submission components:</p>
        <table className="info-table info-table--wide info-table--component-centered">
          <thead>
            <tr>
              <th>Component</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Original Author Submission</strong></td>
              <td>The submission's question, data, multi-step solution, rubric, and metadata. This is the baseline artifact being evaluated. This contains the most recent version of the submission, if it has undergone revisions from previous cycles</td>
            </tr>
            <tr>
              <td><strong>Preference Annotation</strong></td>
              <td>A blind comparison of the original author's solution against an LLM-generated one, rated across 3 axes, with individual pass/fail judgments on the question and each solution. The overall outcome must be a pass to reach adjudication</td>
            </tr>
          </tbody>
        </table>
        <p>Familiarize yourself with the full project guidelines before beginning adjudication. Each phase has specific requirements — refer back to them as needed to ensure you have a complete understanding of what was expected at each step.</p>
      </div>
      <div className="section-card">
        <h3>Submission Review Guide</h3>
        <p>Use the guide below to assess each component of the submission. Every component must meet all listed criteria before an Accept determination can be made.</p>
        <table className="info-table info-table--wide info-table--component-centered info-table--review-guide">
          <thead>
            <tr>
              <th>Component</th>
              <th>What to Look For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Domain & Subdomain</strong></td>
              <td>
                <ul>
                  <li>Accurately selected and consistent with the question content</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Data File</strong></td>
              <td>
                <ul>
                  <li><strong>Must be in .zip format and have a single .csv</strong>, <strong>.jpg</strong>, <strong>or .png zipped</strong></li>
                  <li>Must be accessible, uncorrupted, and directly relevant to the question</li>
                  <li>Open source files must have an explicit CC0 license</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Question</strong></td>
              <td>
                <ul>
                  <li>Must adhere to the chosen <strong>Domain</strong> and <strong>Subdomain</strong></li>
                  <li>Must be <strong>fully self-contained</strong> — solvable using only provided data and domain knowledge (does not require tools or knowledge outside of the optionally provided file)</li>
                  <li>Must require <strong>multi-step reasoning (≥3 steps total)</strong>, <strong>not just multi-part reasoning</strong> — questions must require multi-step reasoning to solve a single problem, not only ask for multiple separate answers
                    <ul>
                      <li><strong>Note:</strong> though not encouraged, multi-part questions are allowed so long as each part requires multiple steps to arrive at</li>
                    </ul>
                  </li>
                  <li>Must specify the <strong>required derivation or computation</strong></li>
                  <li>Must specify the <strong>expected output form</strong> (symbolic, numeric, or descriptive)</li>
                  <li>Must not have <strong>ambiguous wording</strong>, <strong>missing context</strong> or <strong>unclear requirements</strong></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Reference Answer Steps</strong></td>
              <td>
                <ul>
                  <li>Must be <strong>discrete</strong>, <strong>clearly labeled</strong>, and not bundled with <strong>multiple actions (≥3 steps total)</strong></li>
                  <li>Must be <strong>accurate</strong>, <strong>sound</strong>, and <strong>consistent with domain knowledge</strong> — all calculations, derivations, formulas, and reasoning included</li>
                  <li>Must <strong>not skip or assert key derivations without justification</strong> — intermediate results must be clearly derived before use</li>
                  <li>Must explicitly state <strong>assumptions</strong>, <strong>units</strong>, and <strong>variable notation</strong> and apply them consistently throughout</li>
                  <li>Must be <strong>clearly organized</strong>, <strong>well-formatted</strong>, and <strong>easy to follow</strong> — mathematical expressions must be in <strong>LaTeX</strong></li>
                  <li>Must <strong>fully address all parts of the question</strong> and follow any specific instructions</li>
                  <li>Must satisfy <strong>every required rubric criterion</strong> and as many optional criteria as possible</li>
                  <li>For short-form answers, must clearly state the <strong>final answer in the expected output format</strong></li>
                  <li>For long-form answers, the steps themselves must constitute the <strong>complete answer</strong></li>
                  <li>Must be <strong>self-contained</strong> — must not reference external resources not provided in the submission</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Reference</strong></td>
              <td>
                <ul>
                  <li>Must include <strong>one or more citations</strong> supporting the reference answer</li>
                  <li>Must be provided in <strong>APA format</strong></li>
                  <li>Must be <strong>open-access</strong> — no paywalled sources</li>
                  <li><span className="text-highlight"><strong>Actively look up each citation to verify it exists and is accessible. Do not assume it is valid without checking</strong></span></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Relevance Summary</strong></td>
              <td>
                <ul>
                  <li>Must include a <strong>brief summary for each reference</strong> describing how it informs the problem context, assumptions, or solution approach</li>
                  <li>Must be <strong>specific</strong> — not generic statements like "this paper is relevant"</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Tags</strong></td>
              <td>
                <ul>
                  <li>Must <strong>accurately reflect</strong> the key concepts and methods required to solve the problem</li>
                  <li>Must be <strong>specific and relevant</strong> — not generic terms like "mathematics" or "biology"</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Rubric</strong></td>
              <td>
                <ul>
                  <li><span className="text-highlight"><strong>The rubric determines the difficulty of the task and is the standard that every solution is judged against. Take the necessary time to review it thoroughly</strong></span></li>
                  <li>Must include at least <strong>5</strong> <strong>required</strong> <strong>criteria</strong> and <strong>4</strong> <strong>optional</strong> <strong>criteria</strong></li>
                  <li>Must cover all three dimensions with <strong>at least 2 criteria of each</strong>: <em>Structure and Presentation</em>, <em>Technical Correctness</em>, and <em>Completeness and Instruction Following</em></li>
                  <li><strong>Optional criteria</strong> should differentiate an excellent response from a stellar one, not repeat or slightly rephrase required criteria</li>
                  <li>Must be <strong>self-contained</strong>; each criterion must state its expectation directly and be gradeable without consulting the reference answer. <strong>Overlap in content is fine; what's not acceptable is a criterion that explicitly points to the reference answer</strong> (e.g., "the response should include X from the reference answer")</li>
                  <li><span className="text-highlight"><strong>The <a href="#" className="content-link" onClick={(e) => { e.preventDefault(); setActiveSection?.('os-step-6'); setTimeout(() => document.getElementById('evaluations-deep-dive')?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 100); }}>rubric evaluations</a> are a good gauge of potential issues with the rubric, but they are not perfect — trust your own judgment. Use your expertise to catch what automated checks cannot:</strong></span>
                    <ul>
                      <li><strong>Calibration:</strong> Are the Required and Optional tags assigned appropriately? <em>This is a very common error mode and can be a sign of submitter difficulty hacking</em></li>
                      <li><strong>Alignment and Flexibility:</strong> Does the rubric evaluate the right objective for the prompt, and does it allow valid alternative approaches without adding unnecessary constraints? Does it avoid incorrect assumptions?</li>
                      <li><strong>Completeness:</strong> Every checkable requirement implied by the prompt should have a corresponding criterion. If something is clearly being asked for and the rubric doesn't capture it, that's a gap</li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>LaTeX Formatting Check</strong></td>
              <td>
                <ul>
                  <li>Make sure this evaluation is a pass</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Difficulty Check</strong></td>
              <td>
                <ul>
                  <li>No action needed here, a difficulty evaluation will be run after the adjudication step</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section-card">
        <h3>Preference Annotation Review Guide</h3>
        <p>Once you have completed the Submission Review Guide, turn your attention to the Preference Annotation results.</p>
        <p>Read through the ratings and rationales to inform your <strong>own independent assessment</strong> of the submission. As you do, verify that the preference annotations are <strong>thorough</strong>, <strong>logical</strong>, <strong>accurate</strong>, and <strong>consistent.</strong></p>
        <p>Pay particular attention to any axes where the EC solution was only rated <strong>equal to the LLM solution</strong> — this may signal a <strong>weaker area worth scrutinizing more closely</strong> as you review the corresponding components of the submission.</p>
        <p><strong>Note:</strong> If the preference annotation is not <strong>thorough</strong>, <strong>logical</strong>, <strong>accurate</strong>, or <strong>consistent</strong> on an otherwise strong submission, proceed with your adjudication decision and flag it in the <strong>#einstein_experienced_adjudicators</strong> channel with the UUID of the submission</p>
      </div>
      <div className="section-card adjudication-decision-card">
        <h3>Adjudication Decision</h3>
        <div className="step-subsection">
          <h4>Making Your Determination</h4>
          <p>After reviewing the submission and preference annotation, select one of the following outcomes:</p>
          <ul>
            <li><strong>Accept</strong> — The submission meets all quality standards across every component. Feedback is optional but encouraged if you have constructive notes for the author.</li>
            <li><strong>Needs Revision</strong> — The submission has identifiable issues that can be addressed with targeted improvements. Use this when problems are fixable, not fundamental.</li>
            <li><strong>Reject</strong> — The submission has fundamental quality issues that cannot be resolved through revision</li>
          </ul>
          <div className="callout callout--highlight">
            <p><strong>Before you select Needs Revision for a minor issue: if you can fix it yourself</strong>, <strong>do so. Small errors in the solution such as a typo</strong>, <strong>a LaTeX formatting issue</strong>, <strong>or a missing line of clarification do not need to be sent back to the author. Make the edit directly and select Accept</strong>, <strong>as long as no other substantive issues remain.</strong></p>
          </div>
        </div>
        <div className="step-subsection">
          <h4>Feedback</h4>
          <p><strong>Feedback is required for Needs Revision and Reject outcomes. It should be specific enough that the author knows exactly what to fix and where. Feedback is optional on Accept. Use this field to record any observations or notes you feel are relevant for internal reference.</strong></p>
          <p>Structure your feedback using the following format:</p>
          <p>[Component]: Description of the issue and what needs to change.</p>
          <p>For example: <strong>Question</strong>: The question does not specify the expected output format — it should state whether the answer should be symbolic, numeric, or descriptive.</p>
          <p>Avoid generic feedback like "the solution needs improvement."</p>
          <p>Address each problematic component separately (in the single feedback box) and be as targeted as possible.</p>
        </div>
        <div className="step-subsection">
          <h4>Post Annotation</h4>
          <p>Once you have submitted your determination, please log how long it took you to complete the adjudication task in minutes.</p>
        </div>
      </div>
      <div className="section-card">
        <h3>Next Steps</h3>
        <p>After submitting adjudication, if you choose to <strong>Accept</strong>, a final difficulty evaluation will be run offline to determine the classification of the submission. If you choose <strong>Needs Revision</strong>, your feedback will be sent back to the original submitter. If the original submitter has already had 3 rounds of feedback after being sent for revision from the adjudication stage, their submission will be <strong>rejected</strong>.</p>
        <p><strong>Thank you for your thorough adjudication!</strong></p>
      </div>
    </section>
  )
}

export default Adjudication
