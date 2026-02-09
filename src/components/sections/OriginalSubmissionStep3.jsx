import './Section.css'
import stepsSample from '../../../images/steps_sample.png'

function OriginalSubmissionStep3() {
  return (
    <section className="section">
      <h2>Original Submission - Step 3</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">🧠 Reference Steps</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">1. Outline the reasoning steps</h4>
          <ul>
            <li>Provide each step required to reach the final answer.</li>
            <li>Short‑form: list the steps to reach the final answer.</li>
            <li>Long‑form: the steps themselves are the answer.</li>
          </ul>
          <div className="image-card">
            <img className="image-wide" src={stepsSample} alt="Reference steps example" />
            <div className="image-caption">Sample steps format.</div>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Sample steps: Mathematics</h4>
          <pre className="code-block">{`Multimodal: N
Domain: Mathematics
Subdomain: Linear Algebra
Long vs. Short Form: Long-form
Difficulty Tier: N/A
Tags: SVD; best-rank-k; Eckart-Young; Frobenius-norm; orthogonal-invariance; low-rank-approximation

Step 1: Orthogonal invariance of the Frobenius norm.
Step 2: Frobenius norm decomposition for diagonal Sigma.
Step 3: Lower bound from rank constraint.
Step 4: Achievability via truncated SVD.
Step 5: Characterize all minimizers.`}</pre>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Sample steps: Biology</h4>
          <pre className="code-block">{`Multimodal: Y
Domain: Biology
Subdomain: Computational Biology
Long vs. Short Form: Short-form
Difficulty Tier: N/A
Tags: logistic growth; nonlinear modeling; parameter estimation; microbial dynamics; carrying capacity

1) Start from the logistic growth equation.
2) Rearrange to isolate the exponential term.
3) Take natural log to obtain a linear relationship.
4) Use given K and N0; compute transformed values.
5) Fit a line to estimate r (slope = -r).`}</pre>
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep3
