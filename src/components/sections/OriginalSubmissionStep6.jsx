import './Section.css'

function OriginalSubmissionStep6() {
  return (
    <section className="section">
      <h2>Step 6: Evaluation</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">✔️ Evaluation</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">What Are Evaluations?</h4>
          <p>
            After you complete Steps 1 through 6, your submission goes through a comprehensive
            evaluation process before moving to the next phase. This evaluation
            system includes <strong>12 automated checks</strong> that review your question, answer,
            rubric, and overall task quality.
          </p>
          <p>
            These evaluations serve as your first quality gate—they catch common issues early and
            provide immediate feedback so you can improve your submission before it reaches human
            reviewers. Think of them as a helpful checklist that ensures your work meets the
            project&apos;s standards.
          </p>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Difficulty Evaluation</h4>
          <p>
            Every submission automatically goes through an offline difficulty evaluation. To advance
            to the next phase, your submission must pass this evaluation <strong>and</strong> have the consent
            checkbox checked.
          </p>
          <p><strong>1. In-App Evaluation (Optional)</strong></p>
          <p>
            You can run a quick in-app difficulty check before submitting. <strong>This is optional</strong>; it may not work for complex questions and won&apos;t affect your ability
            to submit. Use it as a rough pulse check only.
          </p>
          <p>
            Select your difficulty tier based on how many of the 5 frontier models fail. If you do
            not run the check, feel free to just select Advanced. We will assign difficulty based on
            the offline difficulty run regardless.
          </p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontier</td>
                <td>At least 4 models fail</td>
              </tr>
              <tr>
                <td>Advanced</td>
                <td>Between 2–3 models fail</td>
              </tr>
              <tr>
                <td>Core</td>
                <td>1 model fails</td>
              </tr>
            </tbody>
          </table>
          <p><strong>2. Difficulty Assignment (Ignore on First Submission)</strong></p>
          <p>
            The <strong>Difficulty Assignment</strong> field on the submission form will auto-populate
            after submission with your offline evaluation results, showing you the actual number of
            model failures. No action needed; it&apos;s there for your reference and to help you
            understand your results if your submission is returned.
          </p>
          <p><strong>3. Check the Consent Box (Optional)</strong></p>
          <p>
            At the bottom of the submission form, you&apos;ll see a <strong>Difficulty Evaluation
            Consent</strong> checkbox. Checking this means: <em>&quot;I&apos;m ready for this submission to
            advance if it passes offline evaluation.&quot;</em>
          </p>
          <div className="callout callout--highlight">
            <p>
              ⚠️ <strong>IMPORTANT:</strong> You don&apos;t have to check this box right away. If you leave it unchecked, you&apos;ll receive
              offline evaluation feedback and can iterate on your question before proceeding.
            </p>
          </div>
          <p><strong>4. Automatic Offline Evaluation</strong></p>
          <table className="info-table info-table--outcome-matrix">
            <thead>
              <tr>
                <th>Consent Box</th>
                <th>Offline Evaluation Result</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unchecked</td>
                <td>Any</td>
                <td>Feedback* returned, check Difficulty Assignment field for results. Resubmission needed to advance.</td>
              </tr>
              <tr>
                <td>Checked</td>
                <td>Fails</td>
                <td>Feedback* returned, check Difficulty Assignment field for results. Resubmission needed to advance.</td>
              </tr>
              <tr className="eval-advances">
                <td>Checked</td>
                <td>Passes (at least 1 model fails)</td>
                <td>Advances to next phase</td>
              </tr>
            </tbody>
          </table>
          <p className="outcome-table-note">
            <strong>*A failed difficulty evaluation does not count towards your three-revision limit.</strong>
          </p>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Evaluations Deep Dive</h4>
          <p>Below are all evaluations your submission will go through.</p>
          <ul>
            <li>
              <strong>Blocking:</strong> Must pass to proceed. Fix issues and re-run evaluations.
            </li>
            <li>
              <strong>Non-Blocking:</strong> Strong warnings. You can proceed, but reviewers may still
              reject based on these. Fix unless you&apos;re confident the evaluation doesn&apos;t apply.
            </li>
            <li>
              <strong>Feedback (Optional):</strong> Feel free to submit feedback on evaluations
              directly in the platform.
            </li>
          </ul>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Question Quality (3 evaluations)</h4>
          <p>These evaluations ensure your question is well-formed, clear, and solvable.</p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Evaluation Name</th>
                <th>Blocking?</th>
                <th>What it Checks</th>
                <th>How to Fix Common Issues</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Self-Contained</td>
                <td className="eval-non-blocking">Non-Blocking</td>
                <td>
                  Questions must be solvable without access to any external resources. The prompt,
                  data provided, and reasonable domain knowledge should be sufficient to answer the
                  question.
                </td>
                <td>
                  Include all necessary context, definitions, formulas, and assumptions directly in
                  your question. Don&apos;t reference external websites, papers, or resources that
                  aren&apos;t provided.
                </td>
              </tr>
              <tr>
                <td>No Tools Required</td>
                <td className="eval-non-blocking">Non-Blocking</td>
                <td>
                  Questions must be solvable by a language reasoning model without access to tools,
                  including web search, code interpreters, and code execution.
                </td>
                <td>
                  Design your question so it can be solved through reasoning and calculation alone.
                  Avoid questions that require running code, accessing databases, or using
                  specialized software.
                </td>
              </tr>
              <tr>
                <td>Domain Consistency</td>
                <td className="eval-non-blocking">Non-Blocking</td>
                <td>
                  Expert specified domain tags must be consistent with the question, i.e., the
                  question is indeed relevant to the specified domain.
                </td>
                <td>
                  Review your selected domain and subdomain. Make sure your question&apos;s content clearly
                  belongs to that area. If flagged, consider revising your question or selecting a
                  more appropriate domain.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Answer Quality (2 evaluations)</h4>
          <p>
            These evaluations review the quality, correctness, and completeness of your reference
            solution.
          </p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Evaluation Name</th>
                <th>Blocking?</th>
                <th>What it Checks</th>
                <th>How to Fix Common Issues</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rubric Self-Evaluation</td>
                <td className="eval-blocking">Blocking</td>
                <td>
                  Grades the original author&apos;s reference solution against their own rubric. A task
                  cannot be submitted until the reference solution passes 100% of all required and
                  optional criteria for the rubric.
                </td>
                <td>
                  Review your answer against your own rubric criteria. Make sure your reference
                  answer demonstrates every required criterion and as many optional criteria as
                  possible. If it doesn&apos;t pass 100%, either improve your answer or adjust your
                  rubric.
                </td>
              </tr>
              <tr>
                <td>Atomicity</td>
                <td className="eval-non-blocking">Non-Blocking</td>
                <td>
                  Checks that each step is actually a single step and not a collection of multiple
                  steps within one step.
                </td>
                <td>
                  Break down complex steps into smaller, discrete steps. Each step should represent
                  one clear action or reasoning stage. If a step contains &quot;and then&quot; or describes
                  multiple actions, split it into separate steps.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Rubric Quality (4 evaluations)</h4>
          <p>
            These evaluations ensure your rubrics are comprehensive, clear, and aligned with your
            solution.
          </p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Evaluation Name</th>
                <th>Blocking?</th>
                <th>What it Checks</th>
                <th>How to Fix Common Issues</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Criteria Diversity</td>
                <td className="eval-blocking">Blocking</td>
                <td>
                  Ensures that the rubric across both required and optional criteria has at least
                  two criteria for each top level dimension: Technical Correctness, Structure and
                  Presentation, and Completeness and Instruction Following.
                </td>
                <td>
                  Review your criteria and categorize each by dimension. Add criteria to dimensions
                  that fall short.
                </td>
              </tr>
              <tr>
                <td>Subjective</td>
                <td className="eval-non-blocking">Non-Blocking</td>
                <td>
                  Checks whether your rubric criteria use vague or subjective language without
                  making it specific. Words like &quot;clear,&quot; &quot;appropriate,&quot; &quot;comprehensive,&quot; or
                  &quot;well-written&quot; mean different things to different people. Your criteria should specify
                  exactly what makes something &quot;clear&quot; or &quot;appropriate&quot; so that any reviewer would
                  evaluate it the same way.
                </td>
                <td>
                  Replace vague terms with specific, measurable criteria. For example, instead of
                  &quot;clear explanation,&quot; write &quot;includes all three variables defined with units.&quot;
                  Instead of &quot;appropriate method,&quot; write &quot;uses least-squares regression as
                  specified.&quot;
                </td>
              </tr>
              <tr>
                <td>Ungrounded</td>
                <td className="eval-non-blocking">Non-Blocking</td>
                <td>
                  Checks whether your rubric criteria can actually be verified objectively. If a
                  criterion asks someone to check something specific (like a numerical answer, a
                  particular method, or certain content), you need to provide the information needed
                  to verify it. This includes acceptable answers, tolerance ranges for numbers, or
                  clear decision rules.
                </td>
                <td>
                  Provide concrete grounding for criteria. If checking numerical accuracy, specify
                  tolerance (e.g., &quot;±0.01&quot;). If checking for specific content, list what must be
                  present. If checking methodology, specify which approaches are acceptable.
                </td>
              </tr>
              <tr>
                <td>Redundant Criteria</td>
                <td className="eval-non-blocking">Non-Blocking</td>
                <td>
                  Checks if two or more rubric criteria substantially evaluate the same underlying
                  requirement such that the same behavior is rewarded or penalized multiple times.
                </td>
                <td>
                  Review your criteria and combine or remove ones that overlap significantly. Each
                  criterion should evaluate a distinct aspect of quality. If two criteria essentially
                  check the same thing, keep the more specific one.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Overall Submission Quality (3 evaluations)</h4>
          <p>These evaluations review overall task quality and file formatting.</p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Evaluation Name</th>
                <th>Blocking?</th>
                <th>What it Checks</th>
                <th>How to Fix Common Issues</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Difficulty</td>
                <td className="eval-blocking">Blocking</td>
                <td>
                  Checks if the submission meets the overall difficulty criteria. At least one
                  frontier model must fail to solve the provided question.
                </td>
                <td>
                  If your submission fails this evaluation, your question may be too easy. Consider
                  adding more complexity or steps to the problem, requiring deeper reasoning or more
                  advanced concepts, or using more challenging data or constraints.
                </td>
              </tr>
              <tr>
                <td>CSV & Image</td>
                <td className="eval-blocking">Blocking</td>
                <td>
                  If a file has been uploaded, ensures that it is a CSV/image (or a CSV/image that
                  has been zipped), not PDF, etc.
                </td>
                <td>
                  Make sure your uploaded file is in the correct format: CSV for data files, or
                  standard image formats (PNG, JPG). If you need multiple files, zip them together.
                  Do not upload PDFs.
                </td>
              </tr>
              <tr>
                <td>LaTeX</td>
                <td className="eval-non-blocking">Non-Blocking</td>
                <td>Checks that the submission is in proper LaTeX format.</td>
                <td>
                  Use proper LaTeX syntax for all mathematical expressions. Check that all equations,
                  symbols, fractions, and special characters render correctly. Test your LaTeX in a
                  previewer if unsure. The evaluator should give specific feedback on where
                  correction is needed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep6
