import './Section.css'
import { InlineMath } from 'react-katex'
import requiredCriteriaSample from '../../../images/required_criteria_sample.png'
import optionalCriteriaSample from '../../../images/optional_criteria_sample.png'

function OriginalSubmissionStep5() {
  return (
    <section className="section">
      <h2>Step 5: Tags & Rubrics</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">🏷️ Tags</h3>
        <p>Once you provide your answers, you will need to provide tags to indicate topics or themes someone would need to know to solve the problem.</p>
        <div className="step-subsection">
          <h4 className="step-subtitle tags-reference-subtitle">Reference samples</h4>
          <ul className="tags-reference-list">
            <li><strong>Mathematics:</strong> SVD; best-rank-k; Eckart-Young; Frobenius-norm; orthogonal-invariance; low-rank-approximation</li>
            <li><strong>Biology:</strong> logistic growth; nonlinear modeling; parameter estimation; microbial dynamics; carrying capacity</li>
          </ul>
        </div>
      </div>
      <div className="section-card section-card--step step5-images">
        <h3 className="step-title">📋 Rubrics</h3>
        <p>A collection of objective evaluation criteria designed to produce rich and reproducible assessments of model responses.</p>
        <p>Each criterion will consistently cover the following top-level dimensions of quality:</p>
        <ul>
          <li><strong>Structure and Presentation:</strong> Checks whether the response is clearly written, logically organized, and easy to understand.</li>
          <li><strong>Technical Correctness:</strong> Checks whether all claims, methods, formulas and reasoning steps are valid, logically sound, consistent with established domain knowledge, and sufficiently justified.</li>
          <li><strong>Completeness and Instruction Following:</strong> Checks that the response fully addresses the question and follows any instructions specified in the question, adheres to constraints, and stays within scope.</li>
        </ul>
        <div className="callout callout--highlight">
          ⚠️ Across both required and optional criteria, at least two criteria of each dimension are required.
        </div>
        <div className="callout callout--highlight">
          <h4 className="step-subtitle">⚠️ Creating Self-Contained Rubrics</h4>
          <p><strong>CRITICAL: Your rubric must work independently of your reference solution.</strong></p>
          <p>Your rubric will evaluate multiple solutions that may use different valid approaches. <strong>Write criteria that assess correctness, not whether solutions match your specific method.</strong></p>
          <p><strong>BAD – References your answer:</strong></p>
          <ul>
            <li>Uses the same three-step approach as shown in the reference solution</li>
            <li>Follows the exact method outlined in the reference solution</li>
          </ul>
          <p><strong>GOOD – Self-contained:</strong></p>
          <ul>
            <li>Applies the logistic growth equation <InlineMath math={'N(t) = \\frac{K}{1 + Ae^{-rt}}'} /> with all variables defined</li>
            <li>Performs a linearization transformation (e.g., <InlineMath math={'\\ln(K/N - 1) = \\ln(A) - rt'} />) to enable parameter estimation</li>
          </ul>
          <p><strong>Test:</strong> Could another expert grade a correct solution using only your rubric, without seeing your reference solution? If not, revise.</p>
        </div>
        <div className="step-subsection step-subsection--space-above">
          <h4 className="step-subtitle">1. Required criteria</h4>
          <p><strong>Each task will need to include at least 5 required criteria.</strong> These are criteria that the final answer should always follow. If your question or problem is elaborate, then you have the option to add more required criteria.</p>
          <img src={requiredCriteriaSample} alt="Required rubric criteria example" />
          <div className="callout callout--info">
            <div className="callout-heading">Sample required rubric</div>
            <div className="sample-block">
              <h5 className="sample-section-title">Mathematics</h5>
              <ol>
                <li>Uses orthogonal invariance of the Frobenius norm to reduce to the diagonal case.</li>
                <li>Correctly enforces the rank-k constraint in the lower-bound argument.</li>
                <li>
                  Derives the bound <InlineMath math={'\\sum_{i=k+1}^{r} \\sigma_i^2'} /> correctly.
                </li>
                <li>Constructs the truncated SVD and verifies it achieves the bound.</li>
                <li>Concludes that every minimizer must attain this value.</li>
              </ol>
            </div>
            <div className="sample-block">
              <h5 className="sample-section-title">Biology</h5>
              <ol>
                <li>Reports a single numeric value for <InlineMath math={'r'} /> with correct units.</li>
                <li>Correctly rearranges the logistic growth equation.</li>
                <li>Correctly applies the logarithmic transformation.</li>
                <li>Correctly estimates the slope using multiple data points.</li>
                <li>Reports <InlineMath math={'r'} /> within ±0.005 <InlineMath math={'\\mathrm{hr}^{-1}'} /> of the reference value.</li>
                <li>Uses the provided value of <InlineMath math={'K'} /> exactly.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">2. Optional criteria</h4>
          <p><strong>Each task will need to include at least 4 optional criteria.</strong> These are criteria that the final answer could follow but are not mandatory. Think of these like nice to haves or criteria that differentiate an excellent sample and a stellar sample.</p>
          <img src={optionalCriteriaSample} alt="Optional rubric criteria example" />
          <div className="callout callout--info">
            <div className="callout-heading">Sample optional rubric</div>
            <div className="sample-block">
              <h5 className="sample-section-title">Mathematics</h5>
              <ol>
                <li>Clear notation for <InlineMath math={'\\Sigma_k'} /> and truncated SVD.</li>
                <li>Explicit statement that rank is invariant under orthogonal transformations.</li>
                <li>Brief comment on non-uniqueness when <InlineMath math={'\\sigma_k = \\sigma_{k+1}'} />.</li>
              </ol>
            </div>
            <div className="sample-block">
              <h5 className="sample-section-title">Biology</h5>
              <ol>
                <li>Clearly states modeling assumptions.</li>
                <li>Uses all provided data points.</li>
                <li>Rounds the final answer to three decimal places.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep5
