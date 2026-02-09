import './Section.css'
import { InlineMath } from 'react-katex'
import requiredCriteriaSample from '../../../images/required_criteria_sample.png'
import optionalCriteriaSample from '../../../images/optional_criteria_sample.png'

function OriginalSubmissionStep5() {
  return (
    <section className="section">
      <h2>Original Submission - Step 5</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">📋 Rubrics</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">1. Required criteria</h4>
          <ul>
            <li>Rubrics assess structure, technical correctness, and completeness.</li>
            <li>Include at least <strong>5 required</strong> criteria; add more if needed.</li>
          </ul>
          <div className="callout callout--info">
            Sample required rubric (Mathematics)
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
          <div className="image-card">
            <img src={requiredCriteriaSample} alt="Required rubric criteria example" />
            <div className="image-caption">Required rubric criteria example.</div>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">2. Optional criteria</h4>
          <ul>
            <li>Include at least <strong>4 optional</strong> criteria to capture excellence.</li>
          </ul>
          <div className="callout callout--info">
            Sample optional rubric (Biology)
            <ol>
              <li>Clearly states modeling assumptions.</li>
              <li>Uses all provided data points.</li>
              <li>Rounds the final answer to three decimal places.</li>
            </ol>
          </div>
          <div className="image-card">
            <img src={optionalCriteriaSample} alt="Optional rubric criteria example" />
            <div className="image-caption">Optional rubric criteria example.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep5
